import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";



export default function BoxCard({attraction}) {

  if(!(attraction.name) || (!(attraction?.photo?.images?.large?.url))) return <div></div>

  return(
    <Box w={'100%'} height={200}
    boxShadow='lg'
    backgroundColor={'white'}
    alignItems={'center'}
    marginBlock={1}
    borderRadius={3}>
    <Image w={'100%'} h={'65%'}
    borderRadius={'inherit'}
    src={attraction?.photo?.images.large?.url}
    alt={attraction.name}/>
    <Text>
    {attraction?.name}
    </Text>

    </Box>

  )
}