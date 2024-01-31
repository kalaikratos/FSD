import React from 'react'

function Search() {
    let searchText = '';
    const handleChange = (event) => {
        searchText = event.target.value;
        console.log("Search Text:", searchText);
    }
  return (
      <div>
          <h1>Search Text</h1>
          <label htmlFor='search'>Search:</label>
          <input type="text" id='search' onChange={handleChange}></input>
          <p>
              Searching for<strong> {searchText}</strong>
          </p>
      </div>
     

  )
}

export default Search