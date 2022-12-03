import React from 'react'

const Search = ({showInputText}) => {
const inputTextHeaderSection = {
  // border: "1px solid red",
  position: "absolute",
  right: "6rem",
  top: "5rem"
}

  const inputTextHeader = {
    borderRadius: "4px",
    outline: "none",
    border:"none",
    border: "2px solid #DEDEDE",
    padding: "0.5rem 0.5rem",
    fontSize: "14px",
    fontWeight: "600",
  };
  return (
    <>
      <span style={inputTextHeaderSection}>
      { showInputText ?
        <input type="text" style={inputTextHeader} /> : null}
      </span>
    </>
  );
}

export default Search