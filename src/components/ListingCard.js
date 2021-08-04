import React, { useState } from "react";

function ListingCard({ item, list, setList }) {
  const [fav, setFav] = useState(false);
  const handleDelete = (key) => {
    console.log(key);
    fetch(`http://localhost:6001/listings/${key}`, {
      method: "DELETE",
    });
    console.log(list);
    const newArr = list.filter((item) => {
      return item.id !== key;
    });

    setList(newArr);
  };
  return (
    <li className="card" key={item.id}>
      <div className="image">
        <span className="price">$0</span>
        <img src={item.image} alt={item.description} />
      </div>
      <div className="details">
        {fav ? (
          <button
            className="emoji-button favorite active"
            onClick={() => {
              setFav(!fav);
            }}
          >
            ★
          </button>
        ) : (
          <button
            className="emoji-button favorite"
            onClick={() => {
              setFav(!fav);
            }}
          >
            ☆
          </button>
        )}

        <strong>{item.description}</strong>
        <span> · {item.location}</span>
        <button
          className="emoji-button delete"
          onClick={() => {
            handleDelete(item.id);
          }}
        >
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
