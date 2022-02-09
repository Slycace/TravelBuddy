import React from "react";
import { Box, Image, Text, Flex, HStack, Spacer} from "@chakra-ui/react";



export default function BoxCard({attraction}) {

  if(!(attraction.name)) return <div></div>

  return(
    <Flex w={'100%'} height={300}
    boxShadow='lg'
    backgroundColor={'white'}
    alignItems={'center'}
    marginBlock={1}
    borderRadius={3}
    direction={'column'}>
    <Image w={'100%'} h={'65%'}
    borderRadius={'inherit'}
    src={attraction?.photo?.images.large?.url || 'no-image.jpg'}
    alt={attraction.name}/>
    <Text marginLeft={1}
    marginTop={1}
    fontSize={'lg'}
    w={'100%'}
    as={'abbr'}
    >
    {attraction?.name}
    </Text>
    <HStack w={'inherit'} paddingRight={1}
    paddingLeft={1}
    fontStyle={'italic'}>
      <Text fontSize={'xs'}>
        Ratings
      </Text>
      <Spacer/>
      <Text fontSize={'xs'}>
        {attraction?.ranking}
      </Text>
    </HStack>


    </Flex>

  )
}