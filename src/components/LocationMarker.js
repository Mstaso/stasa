import { Icon } from '@iconify/react'
import wildfire from '@iconify/icons-mdi/fire-alert'
import storm from '@iconify/icons-mdi/lightning-alert'
import sea from '@iconify/icons-mdi/water-alert'
import volcanoe from '@iconify/icons-mdi/lava-lamp'

const LocationMarker = ({ lat, lng, category, onClick}) => {
    
    const iconType = () => {
        return (
        category === "Wildfires" ? <Icon icon={wildfire} className="wildfire" /> : 
        category === "Severe Storms" ? <Icon icon={storm} className='storm' /> : 
        category === "Sea and Lake Ice" ? <Icon icon={sea} className='sea' /> : 
        category === "Volcanoes" ? <Icon icon={volcanoe} className='volcanoe' /> : null 
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