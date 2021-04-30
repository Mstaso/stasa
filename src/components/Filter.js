import { useState }from 'react'

    const Filter = ({ filterCategories }) => {

        // const [wildfire, setWildfire] = useState(true)
        // const [volcanoe, setVolcanoe] = useState(true)
        // const [storm, setStorms] = useState(true)
        // const [sea, setSea] = useState(true)

    const onChange = (e) => {
        // console.log(e.target.value)
        filterCategories(e.target.value, e.target.checked)
    }
    return (
        <form class="filter-form" onChange={onChange}>
            <label for="all">All</label>
            <input type="checkbox" name="all" value="all" ></input>
            <label for="wildfires">Wildfires</label>
            <input type="checkbox" name="wildfires" value="Wildfires" ></input>
            <label for="volcanoes">Volcanoes</label>
            <input type="checkbox" name="volcanoes" value="Volcanoes" ></input>
            <label for="sea">Sea and Lake Ice</label>
            <input type="checkbox" name="sea" value="Sea and Lake Ice" ></input>
            <label for="storm">Severe Storms</label>
            <input type="checkbox" name="storm" value="Severe Storms" ></input>
        </form>
    )
}

export default Filter
