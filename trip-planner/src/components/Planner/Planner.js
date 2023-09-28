import React, { useEffect, useState, useRef, useContext } from 'react'
import {useJsApiLoader , GoogleMap, Marker, Autocomplete, DirectionsRenderer} from '@react-google-maps/api'
import { Link } from 'react-router-dom';
import {  cityname } from '../Form/Form';
import "./Planner.css"
import axios from 'axios'
const center = { lat: 48.8584, lng: 2.2945 };


function Planner({day1,cityname}) {

  // const extra_places = [
  //   {
  //     "place_image": "https://i.ibb.co/bRr4WLb/delhi-haat.jpg",
  //     "place_name": "Delhi Haat INA",
  //     "description": "The DILLI HAAT provides the ambience of a traditional Rural Haat or village market, but one suited for more contemporary needs.",
  //     "place_time": "3 hours ",
  //     "place_type": "Attraction"
  //   },
  //   {
  //     "place_name": "India Gate",
  //     "place_image": "https://i.ibb.co/N7HM1D2/india-gate.jpg",
  //     "place_time": "1hr",
  //     "description": "The DILLI HAAT provides the ambience of a traditional Rural Haat or village market, but one suited for more contemporary needs.",
  //     "place_type": "Attraction"
  //   },
  //   {

  //     "place_name": "Lotus Temple",
  //     "place_image": "https://i.ibb.co/QdHm1Dc/Lotus-Temple.jpg",
  //     "description": "The DILLI HAAT provides the ambience of a traditional Rural Haat or village market, but one suited for more contemporary needs.",
  //     "place_time": "3hr",
  //     "place_type": "Attraction"

  //   },
  //   {

  //     "place_name": "Qutub Minar",
  //     "place_image": "https://i.ibb.co/nfSGf85/Qutub-Minar.jpg",
  //     "description": "The DILLI HAAT provides the ambience of a traditional Rural Haat or village market, but one suited for more contemporary needs.",
  //     "place_time": "1.5hr",
  //     "place_type": "Attraction"

  //   }
  // ]



  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');

  /**@type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef();
    /**@type React.MutableRefObject<HTMLInputElement> */
  const destinationRef = useRef();

  const [map, setMap]= useState(/** @type google.maps.Map */(null))


  const {isLoaded}= useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries : ['places'],

  })
  if (!isLoaded){
    return console.log("Loading in progress")
  }


  async function calculateRoute() {
    if (originRef.current.value === '' || destinationRef.current.value === '') {
      return;
    }
    // eslint-disable-next-line no-undef
    const directionService = new google.maps.DirectionsService()
    const results = await directionService.route({
      origin : originRef.current.value,
      destination : destinationRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode : google.maps.TravelMode.DRIVING
    })
    setDirectionsResponse(results)
    setDistance(results.routes[0].legs[0].distance.text)
    setDuration(results.routes[0].legs[0].duration.test)

  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance('');
    setDuration('');
    originRef.current.value = '';
    destinationRef.current.value = '';
  }

  return (
    
    <div className='planner_container'>
      <div className='planner_main_left_panel'>
        {/* Planner Header */}
        <div className='planner_main_header'>
          <div className='planner_header_left_arrow_icon'>
            {/* <i className='fas fa-solid fa-arrow-left fa-shake'></i> */}
            <i class="fa-solid fa-chevron-left"></i>
          </div>

          <div className='planner_header_left_logo'>
            <Link to="/"><img src="https://i.ibb.co/QKkrvRx/Main-logo.png" alt="Trip Planner Logo" width="110px" height="50px" /></Link>
          </div>
        </div>



        {/* Cards Code */}
        <div className='planner_main_section_container'>

          <div className='planner_section_heading'>
            <h2>Top sights in {}</h2>
            <p>Select the places you would like to include for your visit in {}</p>
          </div>
          {/* Buttons Code */}

          <div className="planner_section_button_container">

          </div>


          {/* <div>
            {
              day1.map((data, index) => {
                if (data.place_type === "Attraction") {
                  return (
                    <div key={index} className='planner_section_cards'>
                      <img src={data.place_image} alt={data.place_name} className='planner_section_cards_image' />
                      <div className='planner_section_cards_description'>
                        <div className="planner_s_c_d_heading">
                          <h3>{data.place_name}</h3>
                          <form>
                            <input type="checkbox" name="plannercheckbox" className='planner_checkbox' />
                          </form>
                        </div>
                        <div className="planner_s_c_d_para">
                          <p>ABC</p>
                          <p>{data.description}</p>
                        </div>
                        <div className="planner_s_c_d_utilities">
                          <p>{data.place_time}</p>
                        </div>
                      </div>
                    </div>
                  )
                }


              })
            }
          </div> */}


        </div>

      </div>
      
      <div className="planner_main_right_panel">
        {/* Mapping Code */}
        <div>
          {/* Google Map */}
          
          <div
            id="google-map" // Add an id to this div for Google Maps integration
            style={{
              position:"absolute",
              margin:"20px",
              marginTop : "90px",
              width:"100%",
              height : "80vh"
              
            }}
          >
            {/* Display your Google Map here */}
            <GoogleMap center={center} zoom={15} mapContainerStyle={{width : '100%', height: "100%"}} onLoad={(map)=>setMap(map)}>
              <Marker position={center}>

              </Marker>
              {directionsResponse && <DirectionsRenderer directions={directionsResponse}/>}
          </GoogleMap>
          </div>

          <div className='google_navigation_div'>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Autocomplete>

              <div style={{ flex: 1 }}>
                <input type="text" placeholder="Origin" ref={originRef} />
              </div>
              </Autocomplete>
              <Autocomplete>

              <div style={{ flex: 1 }}>
                <input
                  type="text"
                  placeholder="Destination"
                  ref={destinationRef}
                />
              </div>
              </Autocomplete>
              <div>
                <button
                  style={{ backgroundColor: 'pink', color: 'white' }}
                  onClick={calculateRoute}
                >
                  Calculate Route
                </button>
                <button onClick={clearRoute}>Clear Route</button>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
              <div>Distance: {distance}</div>
              <div>Duration: {duration}</div>
              <button
                onClick={() => map.panTo(center)}
              >
                Center Map
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Planner
