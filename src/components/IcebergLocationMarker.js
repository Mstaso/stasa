import React from 'react'
import { Icon } from '@iconify/react'
import icebergLocationIcon from '@iconify/icons-mdi/ice-cream'

const VolcanoLocationMarker = ({ lat, lng, onClick}) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={icebergLocationIcon} className="iceberg-location-icon" />
        </div>
    )
}

export default VolcanoLocationMarker
