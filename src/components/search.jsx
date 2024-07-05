import Autocomplete from "../components/autocomplete";

function Search() {
  const staticData = [
    "apple",
    "banana",
    "berry",
    "cherry",
    "plum",
    "grape",
    "orange",
    "melon",
    "peach",
    "berrl",
  ];

  const fetchSuggestions = async (query) => {
    const response = await fetch(
      `https://dummyjson.com/recipes/search?q=${query}`
    );
    if (!response.ok) {
      throw new Error("Network response not Ok");
    }
    const result = await response.json();
    return result.recipes;
  };

  return (
    <div className="container">
      <h1>Autocomplete / Typehead</h1>
      <Autocomplete
        placeholder={"Enter Recipe"}
        // staticData={staticData}
        fetchSuggestions={fetchSuggestions}
        dataKey={"name"}
        customLoading={"Loading Recipes..."}
        onSelect={(res) => console.log(res)}
        onChange={(input) => {}}
        onBlur={(e) => {}}
        onFocus={(e) => {}}
      />
    </div>
  );
}

export default Search;
