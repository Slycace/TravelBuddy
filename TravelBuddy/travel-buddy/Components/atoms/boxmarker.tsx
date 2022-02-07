import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Flex,
} from '@chakra-ui/react';
import { GoogleMap, Marker } from '@react-google-maps/api';

const data = {
  isNew: true,
  imageURL:
    'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
  name: 'Wayfarer Classic',
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};

export default function BoxMarker() {
  return (
      <Flex
      w={100}
      h={50}
      backgroundColor={'white'}
      direction={'column'}
      alignContent={'flex-start'}

      >
        <Text w>
          testing the text here
        </Text>
        <Image src={data.imageURL} width={'inhert'}>

        </Image>
        <Box>
          ratings go here
        </Box>
      </Flex>
  );
}