import React from 'react';
import Link from 'next/link';
import { Box, Text, LinkOverlay} from '@chakra-ui/react'

export default function Logo() {
  return (
    <Box bgColor={'lightblue'} w='100%' >
      <Link href={'/'} passHref>
        <Text fontSize="lg" fontWeight={"bold"} cursor={'pointer'}>
          <a>
              TravelBuddy
          </a>
         </Text>
      </Link>
    </Box>
  )
}
