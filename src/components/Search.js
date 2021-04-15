import React from 'react'
import { useState } from 'react'

const Search = (props) => {

    const [mediaData, setMediaData] = useState([])

    return (
        <div class="searchContainer">
              <form>
                <input
                    id="searchInput"
                    type="text"
                    placeholder="Search"
                    value={props.searchTerm}
                    onChange={props.handleChange}
                />
            </form>
        </div>
    )
}

export default Search
