import { contextType } from "google-map-react";
import axios from "axios";
import React,{ useState, createContext, useEffect } from "react";

const initialCoords = {lat: 35.6762, lng:139.6593}

export const BoundsContext = createContext(null);
export const CoordinatesContext = createContext(initialCoords);
export const Context = createContext([]);

export default function GlobalState({ children }) {
const [state, setState] = useState(null);
const [bounds, setBounds] = useState(null);
const [coordinates, setCoordinates] = useState(initialCoords);

 useEffect(() => {
    // fetch('/api/attractions')
    // .then((res) => res.json())
    // .then((data) => {
    //   setState(data);
    // })
 },[])

 const postCoords = async () => {
   try {
    let response = await axios.post('/api/attractions', {coordinates});
    const res = await response;
    const newresponse = await axios.get('/api/attractions')
    const {data: {data}} = await newresponse;
    console.log(data,'testing')
    setState(data);
   } catch(err) {
     console.log(err)
   }
 }

 useEffect(() => {
  postCoords()

 },[coordinates])

return (
  <CoordinatesContext.Provider value={[coordinates,setCoordinates]}>
  <BoundsContext.Provider value={[bounds, setBounds]}>
  <Context.Provider value={[state,setState]}>
      {children}
  </Context.Provider>
  </BoundsContext.Provider>
  </CoordinatesContext.Provider>
)



}