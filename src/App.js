import React from 'react'
import './App.css';
import Map from './components/Map'
import Loader from  './components/Loader'
import Header from  './components/Header'
import { useState, useEffect } from 'react'


const App = () => {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  const [filteredData, SetfilteredData] = useState([])
 


  useEffect(() => {

    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      const { events } = await res.json()

      console.log(events)
      setEventData(events)
      setLoading(false)
    }
    fetchEvents()
  }, []
  )

  const filterCategories = (category) => {
    console.log(category)
      const newData = eventData.filter(ev => 
       ev.categories[0].title === category
     )
     newData.length === 0 ? console.error("no current matches for the selected category") : SetfilteredData(newData)
     
   }


  return (
    <div>
      <Header />
      { !loading ? <Map eventData={eventData} filteredData={filteredData} filterCategories={filterCategories} /> : <Loader />}
      
    </div>
  );


}

export default App;

