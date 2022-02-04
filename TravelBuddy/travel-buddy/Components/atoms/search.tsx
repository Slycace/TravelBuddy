import React, {useState, useRef, useEffect, MutableRefObject} from 'react';
import { Input } from '@chakra-ui/react';

interface Props {
  placeholder:  string | 'search'
}

export default function Search(props: Props) {

    const [input, setInput] = useState('');

    let inputElement:MutableRefObject<HTMLInputElement| null> = useRef(null);
    useEffect(() => {
      let autoComplete: google.maps.MVCObject | null = new google.maps.places.SearchBox(inputElement.current)
    },[])

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput(e.target.value)
    }

   return (
     <Input autoComplete='on' ref={inputElement} type={'text'} placeholder={props.placeholder} value={input}
     onChange={handleChange}/>
   )
}