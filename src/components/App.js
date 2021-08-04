import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [list, setList] = useState([]);
  return (
    <div className="app">
      <Header list={list} setList={setList} />
      <ListingsContainer list={list} setList={setList} />
    </div>
  );
}

export default App;
