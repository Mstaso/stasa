import React from 'react'
import './App.css';
import Map from './components/Map'
import Loader from  './components/Loader'
import Header from  './components/Header'
import { useState, useEffect } from 'react'


const App = () => {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

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

  return (
    <div>
      <Header />
      { !loading ? <Map eventData={eventData}/> : <Loader />}
      
    </div>
  );


}

export default App;

