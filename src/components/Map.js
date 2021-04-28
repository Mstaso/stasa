import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'
import Filter from './Filter'
import { useState } from 'react'

const Map = ({ eventData, filterCategories, center, zoom}) => {

    const [locationInfo, setLocationInfo] = useState(null)

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
    
    return (
        <div class="map">
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyCMEFlkl-HxYZeWrOitlS-hI8bn6gQXY0s'}}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >

             {markers}
            </GoogleMapReact>
            <Filter filterCategories={filterCategories}/>
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
