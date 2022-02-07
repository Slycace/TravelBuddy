import React from "react";
import {HStack} from "@chakra-ui/react";
import Search from "../atoms/search";


export default function WhereTooSearch() {
  return(
    <HStack
    direction={'row'}
    backgroundColor={'white'}
    borderRadius={'5px'}
    width={'50vw'}
    alignSelf={'center'}>
        <Search placeholder="Where"/>
        <Search placeholder="Too"/>
    </HStack>
  )
}