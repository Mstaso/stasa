import React from 'react'
import { useState } from 'react'
    
    
    const Filter = ({ filterCategories }) => {

    const [wildfire, setWildfire] = useState(true)    
    const [volcanoes, setVolcanoes] = useState(true)   
    const [sea, setSea] = useState(true)   
    const [storm, setStorm] = useState(true)   

    const onChange = (e) => {
        filterCategories(e.target.value, e.target.checked)
    }

    const buttonListener = (e) => {
        e.preventDefault()
        filterCategories('all')
        setWildfire(true)
        setVolcanoes(true)
        setSea(true)
        setStorm(true)
    }

    return (
        <form class="filter-form" onChange={onChange} >
            <button onClick={buttonListener} name="all"> View All </button>
            <br></br>
            <label for="wildfires">Wildfires</label>
            <input type="checkbox" name="wildfires" value="Wildfires" checked={wildfire} onChange={() => (setWildfire(!wildfire))}></input>
            <label for="volcanoes">Volcanoes</label>
            <input type="checkbox" name="volcanoes" value="Volcanoes" checked={volcanoes} onChange={() => (setVolcanoes(!volcanoes))}></input>
            <label for="sea">Sea and Lake Ice</label>
            <input type="checkbox" name="sea" value="Sea and Lake Ice" checked={sea} onChange={() => (setSea(!sea))}></input>
            <label for="storm">Severe Storms</label>
            <input type="checkbox" name="storm" value="Severe Storms" checked={storm} onChange={() => (setStorm(!storm))}></input>
        </form>
    )
}

export default Filter
