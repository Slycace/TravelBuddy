import type { NextPage } from 'next'
import Script from 'next/script'
import Navbar from '../Components/organisms/navbar'
import TravelSearch from '../Components/organisms/travelsearch'
import { Box } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
      <Box w={'100vw'} h={'100vh'}>
        <Navbar/>
        <TravelSearch/>
      </Box>


  )
}


export default Home
