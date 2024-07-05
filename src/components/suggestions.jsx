import React from "react";
import "./style.css";
function Suggestions({
  dataKey,
  highlights,
  suggestions = [],
  onSuggestionClick,
}) {
  const getHighlightedText = (text, highlights) => {
    const parts = text.split(new RegExp(`(${highlights})`, "gi"));

    return (
      <span>
        {parts.map((part, index) => {
          return part.toLowerCase() === highlights.toLowerCase() ? (
            <b style={{ color: "red" }} key={index}>
              {part}
            </b>
          ) : (
            part
          );
        })}
      </span>
    );
  };
  return (
    <>
      {suggestions.map((suggestion, index) => {
        const currentSuggestions = dataKey ? suggestion[dataKey] : suggestion;
        return (
          <li
            key={index}
            onClick={() => onSuggestionClick(suggestion)}
            className="suggestion-item"
          >
            {getHighlightedText(currentSuggestions, highlights)}
          </li>
        );
      })}
    </>
  );
}

export default Suggestions;
