import React, { useState } from "react";
import axios from "axios";

const Post = ({ list, setList }) => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const handleSub = (e) => {
    e.preventDefault();
    fetch("http://localhost:6001/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: name,
        image: image,
        location: location,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setList([...list, data]);
      });
  };
  return (
    <>
      <section>
        <form type="submit" onSubmit={handleSub}>
          <label htmlFor="name">
            Item
            <input
              type="text"
              id="name"
              name="name"
              val={name}
              placeholder="item name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
          </label>
          <label htmlFor="location">
            location
            <input
              type="text"
              id="location"
              name="location"
              val={location}
              placeholder="enter Location"
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            ></input>
          </label>

          <label htmlFor="img">
            <input
              type="file"
              id="img"
              name="img"
              val={image}
              onChange={(e) => {
                console.log(e.target.files);
                setImage(e.target.files);
              }}
            ></input>
          </label>
          <button>Submit</button>
        </form>
      </section>
    </>
  );
};

export default Post;
