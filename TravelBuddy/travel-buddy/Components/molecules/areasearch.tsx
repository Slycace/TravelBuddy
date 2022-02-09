import React from "react";
import { Flex,Text } from "@chakra-ui/react";
import Search from "../atoms/search";

export default function AreaSearch() {

  return (
    <Flex h={'100%'} w={'100%'}
    direction={'column'}

    backgroundColor={'whitesmoke'}
    alignItems={'center'}
    shadow={'lg'}>
      <Flex
      justifyContent={'space-evenly'}
      direction={'column'}
      h={'100%'}
      w={'90%'}
      >
        <Search placeholder="Too"/>
      <Text as={'i'} fontSize={'xl'}>Search for Food, Attractions, and Hotels. </Text>
      </Flex>

    </Flex>
  )

}