import React, {useState, useRef, useEffect, MutableRefObject, useContext} from 'react';
import { Input, Box } from '@chakra-ui/react';
import { Context, BoundsContext, CoordinatesContext, CitiesContext } from '../GlobalState'
import { Autocomplete } from '@react-google-maps/api';

interface Props {
  placeholder:  string | 'search'
}

export default function Search(props: Props) {
    const [cities, setCities] = useContext(CitiesContext);
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
            setCities([...cities,[lat],[lng]])
            setCoordinates({ lat: lat, lng: lng})
        } else {
          setCities([...cities,[lat],[lng]])
        }
        setInput(autocomplete.getPlace().formatted_address)
  }

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput(e.target.value)
    }

   return (
     <Box w={'inherit'} backgroundColor={'white'}>
     <Autocomplete onPlaceChanged={onPlaceChange} onLoad={onLoad}>
     <Input autoComplete='on' type={'text'} placeholder={props.placeholder} value={input}
     onChange={handleChange} ref={ref}/>
      </Autocomplete>
      </Box>
   )
}