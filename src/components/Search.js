import React from 'react'
import { useState } from 'react'

const Search = (props) => {

    const [searchTerm, setSearchTerm] = useState([])

    const handleChange = event => {
        setSearchTerm(event.target.value);
        // console.log(props)
        props.fetchMedia(searchTerm);
      };

    return (
        <div class="searchContainer">
              <form>
                <input
                    id="searchInput"
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleChange}
                />
            </form>
        </div>
    )
}

export default Search
