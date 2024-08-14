import React from 'react'
import style from './search.module.css'

// fontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Search = ({placeHolder}) => {
  return (
    <div className={style.search}>
        <input type="text" name="" id="" placeholder={placeHolder} />
        {/* <div className="srhchbtn"> */}
        <button type="button" className={style.searchIcon}>
            <FontAwesomeIcon  icon={faMagnifyingGlass} />
        </button>
        {/* </div> */}
    </div>
  )
}

export default Search