import React from "react";
import { HStack, VStack, Box, Spacer, Flex, calc } from "@chakra-ui/react";
import Navbar from "../organisms/navbar";
import CitiesAndPlaces from "../organisms/citiesandplaces";
import Map from "../atoms/map";
import AreaSearch from "../molecules/areasearch";
import ScrollList from "../organisms/scrollList";

export default function PlannerTemplate() {

  return(
      <Flex className="mainDiv" direction={'column'} w={'100%'} h={'100%'} >
        <Box className="navDiv" h={30}>
            <Navbar/>
        </Box>
        <Flex className="plannerDiv"
        direction={'row'}

        height="calc(100vh - 30px)"
        >
          <Flex direction={'column'} width={'25vw'}>
            <Flex direction={'column'} h={'25%'} >
             <AreaSearch/>
            </Flex>
            <Flex direction={'column'} h={'75%'}>
              <ScrollList/>
            </Flex>
          </Flex>
          <Flex direction={'column'} width={'75vw'}>
            <Flex direction={'column'} h={'5%'}>
             <CitiesAndPlaces/>
            </Flex>
            <Flex direction={'column'} h={'95%'}
            borderWidth={'1px'}
            alignItems={'center'}>
             <Map/>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

  )
}