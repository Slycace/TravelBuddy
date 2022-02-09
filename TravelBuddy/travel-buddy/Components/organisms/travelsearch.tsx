import React from 'react';
import { Flex } from '@chakra-ui/react';
import WhereTooSearch from '../molecules/wheretoosearch';

export default function TravelSearch() {
  return (
    <Flex
    backgroundImage={'JapanTouristSpot.jpg'}
    backgroundSize={'100% 100%'}
    h="calc(100vh - 30px)"
    w={'100vw'}
    objectFit={'cover'}
    direction={'column'}
    wrap={'wrap'}
    justifyContent={'center'}
    >
      <WhereTooSearch/>
    </Flex>

  )
}