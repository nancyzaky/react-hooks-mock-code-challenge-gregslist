import React, { useState } from "react";

function Search(props) {
  const { list, setList } = props;
  const [val, setVal] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:6001/listings")
      .then((resp) => resp.json())
      .then((data) => {
        if (val.length > 0) {
          console.log(val.length);
          const searchItem = data.filter((product) => {
            console.log(product.description.split(" ")[0]);
            return product.description.split(" ")[0] === val;
          });
          console.log(searchItem);
          setList(searchItem);
        } else {
          setList(data);
        }
        setVal("");
      });
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
          console.log(e.target.value);
        }}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
