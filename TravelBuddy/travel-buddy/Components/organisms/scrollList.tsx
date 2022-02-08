import React, {useContext} from "react";
import { Box, Flex, HStack, VStack, scroll } from "@chakra-ui/react";
import { Context } from '../GlobalState';
import BoxCard from "../atoms/boxcard";

export  default function ScrollList() {
  const [state, setState] = useContext(Context);

  return(
      <VStack w={'100%'} h={'100%'}
      direction={'column'}
      overflowY={'scroll'}
      backgroundColor={'whitesmoke'}
      >

          <Flex w={'90%'}
          direction={'column'}
          >
           {state.map((attraction, i) =>(
             <BoxCard attraction={attraction}
             key={i}/>
           ))}

          </Flex>



      </VStack>
  )


}