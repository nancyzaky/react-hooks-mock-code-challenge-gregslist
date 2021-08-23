import React, { useState } from "react";

function ListingCard({
  id,
  image,
  price,
  description,
  location,
  list,
  setList,
}) {
  const [fav, setFav] = useState(false);
  const handleDelete = (key) => {
    fetch(`http://localhost:6001/listings/${key}`, {
      method: "DELETE",
    });
    const newArr = list.filter((item) => {
      return item.id !== key;
    });

    setList(newArr);
  };
  return (
    <li className="card" key={id}>
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
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

        <strong>{description}</strong>
        <span> · {location}</span>
        <button
          className="emoji-button delete"
          onClick={() => {
            handleDelete(id);
          }}
        >
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
