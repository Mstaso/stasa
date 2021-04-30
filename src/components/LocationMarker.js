import { Icon } from '@iconify/react'
import wildfire from '@iconify/icons-mdi/fire-alert'
import storm from '@iconify/icons-mdi/lightning-alert'
import sea from '@iconify/icons-mdi/water-alert'
import volcanoe from '@iconify/icons-mdi/lava-lamp'

const LocationMarker = ({ lat, lng, category, onClick}) => {
    const iconType = () => {
        return (
        category === "wildfires" ? <Icon icon={wildfire} className="wildfire" /> : 
        category === "severe storms" ? <Icon icon={storm} className='storm' /> : 
        category === "sea and lake ice" ? <Icon icon={sea} className='sea' /> : 
        category === "volcanoes" ? <Icon icon={volcanoe} className='volcanoe' /> : null 
        )

    }
    return (
        <div className="location-marker" onClick={onClick}>
            {iconType()}
        </div>
    )
}

export default LocationMarker


// className="fire-location-icon"