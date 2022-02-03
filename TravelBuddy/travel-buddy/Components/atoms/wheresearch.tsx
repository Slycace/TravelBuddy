import React, {useState, useRef, useEffect, MutableRefObject} from 'react';
import { Input } from '@chakra-ui/react';

interface Props {
  
}

export default function WhereSearch(props: string) {

    const [input, setInput] = useState('')

    let inputElement = useRef<HTMLInputElement>()
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput(e.target.value)
    const autocomplete = new google.maps.places.SearchBox(inputElement.current);
    //console.log(autocomplete,'testing what this is')


    }


   return (
     <Input autoComplete='on' ref={inputElement} type={'text'} placeholder='Where' value={input}
     onChange={handleChange}/>
   )
}