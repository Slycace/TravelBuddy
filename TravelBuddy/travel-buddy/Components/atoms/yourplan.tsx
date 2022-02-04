import React from 'react';
import Link from 'next/link'
import { Text,Box } from '@chakra-ui/react';


export default function YourPlan() {
  return (
    <Box>
      <Text>
        <Link href={'/planner'}>
          YourPlan
        </Link>
      </Text>
    </Box>
  )
}