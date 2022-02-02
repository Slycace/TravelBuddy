import React from "react";
import { Flex,Spacer } from "@chakra-ui/react";
import TooSearch from "../atoms/toosearch";
import WhereSearch from "../atoms/wheresearch";

export default function WhereTooSearch() {
  return(
    <Flex
    direction={'row'}
    backgroundColor={'white'}
    borderRadius={'5px'}
    width={'50vw'}
    alignSelf={'center'}>
          <WhereSearch/>
         <TooSearch/>
    </Flex>
  )
}