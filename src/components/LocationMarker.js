import { Icon } from '@iconify/react'
import wildfire from '@iconify/icons-mdi/fire-alert'
import storm from '@iconify/icons-mdi/lightning-alert'
import sea from '@iconify/icons-mdi/water-alert'

const LocationMarker = ({ lat, lng, category, onClick}) => {
    console.log(category)
    const iconType = () => {
        if(category === "wildfires") {
            return <Icon icon={wildfire} className="wildfire" />
        } else if (category === "severe storms") {
            return <Icon icon={storm} className='storm' />
        } else if (category === "sea and lake ice") {
            return <Icon icon={sea} className='sea' />
        }
    }
    return (
        <div className="location-marker" onClick={onClick}>
            {iconType()}
        </div>
    )
}

export default LocationMarker


// className="fire-location-icon"