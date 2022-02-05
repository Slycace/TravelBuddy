import React from "react";
import { HStack, Spacer } from "@chakra-ui/react";
import LocationDrownDown from "../molecules/locationdropdown";

export default function CitiesAndPlaces() {

  return(
    <HStack
    height={'inherit'}
    width={'inherit'}
    borderWidth={1}
    borderColor={'blue'}
    justifyContent={'space-around'}>
        <LocationDrownDown/>
        <LocationDrownDown/>
    </HStack>
  )
}