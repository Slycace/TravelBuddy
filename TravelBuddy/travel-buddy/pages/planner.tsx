import React from "react"
import Navbar from "../Components/organisms/navbar"
import { Box } from "@chakra-ui/react"
import PlannerTemplate from "../Components/templates/travelplanner"
export default function YourPlanner() {
  return (
      <Box w={'100vw'} h={'100vh'}>
      <PlannerTemplate/>
      </Box>
  )
}