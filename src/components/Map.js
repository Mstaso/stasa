import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import StormLocationMarker from './StormLocationMarker'
import IcebergLocationMarker from './IcebergLocationMarker'
import LocationInfoBox from './LocationInfoBox'
import { useState } from 'react'

const Map = ({ eventData, center, zoom}) => {

    const [locationInfo, setLocationInfo] = useState(null)

    // const fireMarkers = eventData.map(ev => {
    //     if(ev.categories[0].id === 8) {
    //         return <FireLocationMarker 
    //         lat={ev.geometries[0].coordinates[1]} 
    //         lng={ev.geometries[0].coordinates[0]}
    //         onClick={() => setLocationInfo({ id:ev.id, title: ev.title})}
    //         />
    //     }
    //     return null
    // })
    const markers = eventData.map(ev => {
        if(!isNaN(ev.geometries[0].coordinates[1]) && !isNaN(ev.geometries[0].coordinates[0]) ) {
            return <LocationMarker 
            lat={ev.geometries[0].coordinates[1]} 
            lng={ev.geometries[0].coordinates[0]}
            category={ev.categories[0].title.toLowerCase()}
            onClick={() => setLocationInfo({ id:ev.id, title: ev.title})}
            />
        }
            return null
    })

    // const stormMarkers = eventData.map(ev => {
    //     if(ev.categories[0].id === 10) {
    //         return <StormLocationMarker 
    //         lat={ev.geometries[0].coordinates[1]} 
    //         lng={ev.geometries[0].coordinates[0]}
    //         onClick={() => setLocationInfo({ id:ev.id, title: ev.title})}
    //         />
    //     }
    //     return null
    // })

    // const volcanoMarkers = eventData.map(ev => {
    //     if(ev.categories[0].id === 15) {
    //         return <IcebergLocationMarker 
    //         lat={ev.geometries[0].coordinates[1]} 
    //         lng={ev.geometries[0].coordinates[0]}
    //         onClick={() => setLocationInfo({ id:ev.id, title: ev.title})}
    //         />
    //     }
    //     return null
    // })
    
    return (
        <div class="map">
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyCMEFlkl-HxYZeWrOitlS-hI8bn6gQXY0s'}}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >

             {markers}
             {/* {stormMarkers}
             {volcanoMarkers} */}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756,
    },
    zoom: 4
}

export default Map;
