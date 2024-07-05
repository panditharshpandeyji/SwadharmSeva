import React, { useCallback, useEffect, useState } from "react";
import "./style.css";
import Suggestions from "./suggestions";
import { debounce } from "lodash";
function Autocomplete({
  placeholder,
  staticData,
  fetchSuggestions,
  dataKey,
  customLoading,
  onSelect,
  onChange,
  onBlur,
  onFocus,
}) {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log(suggestions);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    onChange(event.target.value);
  };

  const getSuggestions = async (query) => {
    setError(null);
    setLoading(true);
    try {
      let result;
      if (staticData) {
        result = staticData.filter((item) => {
          return item.toLowerCase().includes(query.toLowerCase());
        });
      } else if (fetchSuggestions) {
        result = await fetchSuggestions(query);
      }
      setSuggestions(result);
    } catch (error) {
      setError("Failed to fetch suggestions");
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(dataKey ? suggestion[dataKey] : dataKey);
    onSelect(suggestion);
    setSuggestions([]);
  };

  const getSuggestionsDebounced = useCallback(debounce(getSuggestions, 300));

  useEffect(() => {
    if (inputValue.length > 1) {
      getSuggestionsDebounced(inputValue);
    } else {
      setSuggestions([]);
    }
  }, [inputValue]);

  return (
    <div className="container">
      <input
        type="text"
        onChange={handleInputChange}
        placeholder={placeholder}
        value={inputValue}
      />
      {(suggestions.length > 0 || error || loading) && (
        <ul className="suggestion-list">
          {error && <div>{error}</div>}
          {loading && <div className="loading">{customLoading}</div>}
          <Suggestions
            dataKey={dataKey}
            highlights={inputValue}
            suggestions={suggestions}
            onSuggestionClick={handleSuggestionClick}
          />
        </ul>
      )}
    </div>
  );
}

export default Autocomplete;
