import React from 'react';
import './Search.css';
function Search({search,setSearch}) {
  return (
    <div className='logo-main-container'>
        <div className='logo-img-container'>
            <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/beer-party-logo-design-template-7d706ba4c79dad786717ff45d97726e3_screen.jpg?ts=1611940642"/>
        </div>
      <div className='logo-input-container'>
        <input type="text" placeholder='Search' onChange={(e)=>setSearch(e.target.value)}/>
      </div>
    </div>
  );
}

export default Search;
