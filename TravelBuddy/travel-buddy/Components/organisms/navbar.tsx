import react from 'react'
import { Flex, Spacer } from '@chakra-ui/react';
import LoginSignUp from '../molecules/loginsignup';
import LogoPlan from '../molecules/logoplan';


export default function Navbar(props) {
  return(
    <Flex w={'100%'} direction={'row'} backgroundColor={'lightblue'} h={30}>
      <LogoPlan/>
      <Spacer/>
      <LoginSignUp/>
    </Flex>
  )
}