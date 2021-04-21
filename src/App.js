import React from 'react'
import './App.css';
import Map from './components/Map'
import Loader from  './components/Loader'
import Header from  './components/Header'
import Media from  './components/Media'
import Search from  './components/Search'

class App extends React.Component {

  state = {
    eventData: [],
    loading: true,
    searchResults: []
  }


  // handleChange = (event) => {
  //   setSearchTerm(event.target.value);
  //   fetchMedia();
  // };

  fetchEvents = async () => {
    // setLoading(true)
    const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
    const { events } = await res.json()

    this.setState({
      eventData: events,
      loading: true
    })
  
  }

  // useEffect(() => {
  //   const fetchEvents = async () => {
  //     setLoading(true)
  //     const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
  //     const { events } = await res.json()


  //     setEventData(events)
  //     setLoading(false)
  //   }
  //   fetchEvents()
  // }, [eventData]
  // )

  fetchMedia = async (searchTerm) => {
    console.log(searchTerm)
    const res = await fetch(`https://images-api.nasa.gov/search?q=${searchTerm}`)
    const { media } = await res.json()
    console.log(media);
    this.setState({searchResults: media})
  }
  // useEffect(() => {
  //   const fetchMedia = async () => {
  //     const res = await fetch(`https://images-api.nasa.gov/search?q=${searchTerm}`)
  //     const { media } = await res.json()
  //     console.log(media);
  //     setSearchResults(media);
  //   }
    

  // }, [searchTerm]
  // );
  
render() {
  return (
    <div>
      <Header />
      <Search fetchMedia={this.fetchMedia} />
      <Media />
      {/* { !loading ? <Map eventData={eventData}/> : <Loader />} */}
      
    </div>
  );

}

}

export default App;


// const [eventData, setEventData] = useState([])
//   const [loading, setLoading] = useState(false)
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState([]);

//   const handleChange = event => {
//     setSearchTerm(event.target.value);
//     fetchMedia();
//   };

//   useEffect(() => {
//     const fetchEvents = async () => {
//       setLoading(true)
//       const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
//       const { events } = await res.json()


//       setEventData(events)
//       setLoading(false)
//     }
//     fetchEvents()
//   }, [eventData]
//   )