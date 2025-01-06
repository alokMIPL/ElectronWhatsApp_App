import React from 'react'
import {ReactComponent as SearchIcon} from '../../../../assets/icons-svg/search.svg' 

const SearchBox = () => {
  return (
    <div className='search-box-container' >
      <div className='search-box-inner' >
        <input type="text" className='search-box' placeholder='Search' />
        <SearchIcon />
      </div>
    </div>
  )
}

export default SearchBox;