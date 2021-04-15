import './App.css';
import { useState, useEffect} from 'react'
import Map from './components/Map'
import Loader from  './components/Loader'
import Header from  './components/Header'
import Media from  './components/Media'
import Search from  './components/Search'

function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
    fetchMedia()
  };

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      const { events } = await res.json()


      setEventData(events)
      setLoading(false)
    }
    const fetchMedia = async () => {
      const res = await fetch(`https://images-api.nasa.gov/search?q=${searchTerm}`)
      const { media } = await res.json()
      console.log(media);
      setSearchResults(media);
    }
    fetchEvents()
  }, [searchTerm]
  )

  
  // useEffect(() => {
  //   const fetchMedia = async () => {
  //     const res = await fetch(`https://images-api.nasa.gov/search?q=${searchTerm}`)
  //     const { media } = await res.json()
  //     console.log(media);
  //     setSearchResults(media);
  //   }
    

  // }, [searchTerm]
  // );
  

  return (
    <div>
      <Header />
      <Search handleChange={handleChange} />
      <Media />
      {/* { !loading ? <Map eventData={eventData}/> : <Loader />} */}
      
    </div>
  );
}

export default App;
