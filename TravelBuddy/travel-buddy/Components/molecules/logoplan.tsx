import React from 'react';
import { HStack } from '@chakra-ui/react';
import Logo from '../atoms/logo';
import YourPlan from '../atoms/yourplan';

export default function LogoPlan() {
  return(
    <HStack pl={4}>
    <Logo/>
    <YourPlan/>
    </HStack>
  )
}