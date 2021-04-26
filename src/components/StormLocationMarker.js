import React from 'react'
import { Icon } from '@iconify/react'
import stormLocationIcon from '@iconify/icons-mdi/storm-advisory'

const StormLocationMarker = ({ lat, lng, onClick}) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={stormLocationIcon} className="storm-location-icon" />
        </div>
    )
}

export default StormLocationMarker
