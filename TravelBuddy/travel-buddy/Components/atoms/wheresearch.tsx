import React, {useState, useRef, useEffect, MutableRefObject} from 'react';
import { Input, useMergeRefs } from '@chakra-ui/react';

export default function WhereSearch() {

    const [input, setInput] = useState('')

    let inputElement = useRef() as MutableRefObject<HTMLInputElement>;

    // useEffect(() => inputElement.current.value = 'homeland',[])

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      console.log(inputElement.current)
      setInput(e.target.value)
      const autocomplete = new google.maps.places.SearchBox(inputElement.current);
      inputElement.current.autocomplete = 'on';
      console.log(autocomplete,'testing what this is')


    }


   return (
     <Input autoComplete='on' ref={inputElement} type={'text'} placeholder='Where' value={input}
     onChange={handleChange}/>
   )
}