import React from "react";
import { HStack } from "@chakra-ui/react";
import LocationDrownDown from "../molecules/locationdropdown";

export default function CitiesAndPlaces() {

  return(
    <HStack height={50} width={'inherit'} borderWidth={1} borderColor={'blue'}>
        <LocationDrownDown/>
        <LocationDrownDown/>
    </HStack>
  )
}