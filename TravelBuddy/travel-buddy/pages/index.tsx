import type { NextPage } from 'next'
import Script from 'next/script'
import Navbar from '../Components/organisms/navbar'
import TravelSearch from '../Components/organisms/travelsearch'

const Home: NextPage = () => {
  return (
      <div>
        <Navbar/>
        <TravelSearch/>
      </div>
  )
}


export default Home
