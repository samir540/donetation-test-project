import React from 'react'

function Search({setmodalSearch}) {
  return (
<div className='search'>
<div className="search-icon">
<i onClick={()=>setmodalSearch(false)} class="fa-solid fa-xmark"></i>
</div>
<div className="search-content">
    <div className="search-input">
        <input type="text" name="" id="" placeholder='Axtarış'/>
    </div>
    <div className="search-button">
      <button>Axtar</button>
    </div>
</div>
</div>
  )
}

export default Search