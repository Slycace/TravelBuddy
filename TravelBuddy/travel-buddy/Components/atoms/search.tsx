import React, {useState, useRef, useEffect, MutableRefObject, useContext} from 'react';
import { Input, Box } from '@chakra-ui/react';
import { Context, BoundsContext, CoordinatesContext } from '../GlobalState'
import { Autocomplete } from '@react-google-maps/api';

interface Props {
  placeholder:  string | 'search'
}

export default function Search(props: Props) {
    const [autocomplete, setAutocomplete] = useState(null);
    const [input, setInput] = useState('');
    const [bounds, setBounds] = useContext(BoundsContext);
    const [coordinates, setCoordinates] = useContext(CoordinatesContext);
    const ref = useRef(null);
    const onLoad = (autoC) => {
      setAutocomplete(autoC);
    }

    const onPlaceChange = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();
        if(ref.current.placeholder === 'Too') {
            console.log('ran on too check')
            setCoordinates({ lat: lat, lng: lng})
        }
        setInput(autocomplete.getPlace().formatted_address)
    }

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput(e.target.value)
    }

   return (
     <Box w={'inherit'}>
     <Autocomplete onPlaceChanged={onPlaceChange} onLoad={onLoad}>
     <Input autoComplete='on' type={'text'} placeholder={props.placeholder} value={input}
     onChange={handleChange} ref={ref}/>
      </Autocomplete>
      </Box>
   )
}