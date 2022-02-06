import { contextType } from "google-map-react";
import axios from "axios";
import React,{ useState, createContext, useEffect } from "react";



export const BoundsContext = createContext(null);
export const CoordinatesContext = createContext(null);
export const Context = createContext([]);

export default function GlobalState({ children }) {
const [state, setState] = useState(null);
const [bounds, setBounds] = useState(null);
const [coordinates, setCoordinates] = useState(null);

 useEffect(() => {
    // fetch('/api/attractions')
    // .then((res) => res.json())
    // .then((data) => {
    //   setState(data);
    // })
 },[])

 useEffect(() => {
  axios.post('/api/attractions', {coordinates})
  .then((data) => (
    axios.get('/api/attractions')
    .then((data) => {
      setState(data.data.name)
      console.log(state,'testing')
    })
    .catch((err) => (console.log(err,'testing err')))
  ))
  .catch((err) => (console.log(err)))

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