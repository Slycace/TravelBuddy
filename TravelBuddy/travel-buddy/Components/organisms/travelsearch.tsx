import React from 'react';
import { Flex } from '@chakra-ui/react';
import WhereTooSearch from '../molecules/wheretoosearch';

export default function TravelImage() {
  return (
    <Flex backgroundImage={'JapanTouristSpot.jpg'}
    backgroundSize={'100% 100%'}
    h={'90vh'}
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