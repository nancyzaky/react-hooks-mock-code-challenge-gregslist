import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer(props) {
  const { list, setList } = props;

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
    <main>
      <ul className="cards">
        {list.map((item) => {
          return <ListingCard item={item} list={list} setList={setList} />;
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
