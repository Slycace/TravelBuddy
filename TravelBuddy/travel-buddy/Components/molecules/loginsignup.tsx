import React from 'react';
import {HStack} from '@chakra-ui/react';
import Login from '../atoms/login';
import SignUp from '../atoms/signup';

export default function LoginSignUp() {
  return(
    <HStack pr={4}>
      <Login/>
      <SignUp/>
    </HStack>
  )
}