import { Router, useRouter } from "next/router";
import React from "react";
import { useState } from "react";

const Search = ({ showInputText }) => {
  const router = useRouter();
  const [searchBar, setSearchBar] = useState();
  const changeHandler = (e) => {
    e.preventDefault();
    setSearchBar(e.target.value);
  };
  const inputTextHeaderSection = {
    // border: "1px solid red",
    position: "absolute",
    right: "10rem",
    top: "5rem",
  };

  const inputTextHeader = {
    borderRadius: "4px",
    outline: "none",
    border: "none",
    border: "2px solid #DEDEDE",
    padding: "0.5rem 0.5rem",
    fontSize: "14px",
    fontWeight: "600",
  };

  return (
    <>
      <span style={inputTextHeaderSection}>
        {showInputText ? (
          <form
            onSubmit={() => {
              router.push(`/movies?search=${searchBar}`);
            }}
          >
            <input
              type="text"
              style={inputTextHeader}
              onChange={changeHandler}
            />
          </form>
        ) : null}
      </span>
    </>
  );
};

export default Search;
