import React from "react";
import Search from "./Search";
import Post from "./Post";

function Header(props) {
  const { list, setList } = props;
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search list={list} setList={setList} />
      <Post list={list} setList={setList} />
    </header>
  );
}

export default Header;
