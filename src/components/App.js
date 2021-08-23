import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [list, setList] = useState([]);
  const fetchUrl = () => {
    fetch("http://localhost:6001/listings")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setList(data);
      });
  };
  useEffect(() => {
    fetchUrl();
  }, []);
  return (
    <div className="app">
      <Header list={list} setList={setList} />
      <ListingsContainer list={list} setList={setList} />
    </div>
  );
}

export default App;
