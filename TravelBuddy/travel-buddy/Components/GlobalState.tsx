import { contextType } from "google-map-react";
import React,{ useState, createContext } from "react";


const initialPlacesStates = {
  pizzas: ['pizza']
}


export const Context = createContext([]);

export default function GlobalState({ children }) {
const [state, setState] = useState(initialPlacesStates);

return (
  <Context.Provider value={[state,setState]}>
      {children}
  </Context.Provider>
)



}