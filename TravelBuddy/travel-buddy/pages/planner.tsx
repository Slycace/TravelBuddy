import React from "react"
import Navbar from "../Components/organisms/navbar"
import TravelPlanner from "../Components/organisms/travelplanner"
import { Flex } from "@chakra-ui/react"
export default function YourPlanner() {
  return (
    <div>
      <Navbar/>
      <TravelPlanner/>
    </div>
  )
}