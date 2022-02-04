import React from "react";
import { HStack, VStack } from "@chakra-ui/react";

export default function TravelPlanner() {

  return(
    <HStack
    borderWidth={1}
    borderColor={'blue'}
    h={'90vh'}
    w={'100vw'}
    direction={'row'}
    >
    <VStack borderWidth={1} borderColor={'blue'} h={'90vh'} w={'30vw'}>
      
    </VStack>
    <VStack borderWidth={1} borderColor={'blue'} h={'90vh'} w={'70vw'}>

    </VStack>
    </HStack>
  )
}