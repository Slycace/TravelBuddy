import React from "react";
import { HStack, VStack, Box, Spacer, Flex } from "@chakra-ui/react";
import Navbar from "../organisms/navbar";
import CitiesAndPlaces from "../organisms/citiesandplaces";

export default function PlannerTemplate() {

  return(
      <Flex direction={'column'} className="mainDiv">
        <Box h={50} borderWidth={1} borderColor={'blue'} >
            navbar
        </Box>
        <Flex direction={'row'} borderWidth={1} borderColor={'blue'} h={'90vh'}>
          <Flex direction={'column'} width={'25vw'} borderColor={'blue'} borderWidth={1} >
            <Flex direction={'column'} h={'25%'} borderWidth={1} borderColor={'blue'}>
                plugin1
            </Flex>
            <Flex direction={'column'} h={'75%'} borderWidth={1} borderColor={'blue'}>
                plugin2
            </Flex>
          </Flex>
          <Flex direction={'column'} width={'75vw'} borderColor={'blue'} borderWidth={1} >
            <Flex direction={'column'} h={'15%'} borderColor={'blue'}
            borderWidth={'1px'}>
                  plugin3
            </Flex>
            <Flex direction={'column'} h={'85%'} borderColor={'blue'}
            borderWidth={'1px'}>
                  plugin4
            </Flex>
          </Flex>
        </Flex>
      </Flex>

  )
}