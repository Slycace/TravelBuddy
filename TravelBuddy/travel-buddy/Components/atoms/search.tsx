import React, {useState, useRef, useEffect, MutableRefObject, useContext} from 'react';
import { Input } from '@chakra-ui/react';
import { Context } from '../GlobalState'

interface Props {
  placeholder:  string | 'search'
}

export default function Search(props: Props) {
    const [state, setState] = useContext(Context);
    const [input, setInput] = useState('');

    let inputElement:MutableRefObject<HTMLInputElement| null> = useRef(null);
    useEffect(() => {
      let autoComplete: google.maps.MVCObject | null = new google.maps.places.SearchBox(inputElement.current)
    },[])

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput(e.target.value)
    console.log(state,'testing state')
    }

   return (
     <Input autoComplete='on' ref={inputElement} type={'text'} placeholder={props.placeholder} value={input}
     onChange={handleChange}/>
   )
}