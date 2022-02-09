import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Flex,
  Grid,
  GridItem,
  VStack,
} from '@chakra-ui/react';
import { GoogleMap, Marker } from '@react-google-maps/api';

import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';

const data = {
  isNew: true,
  imageURL:
    'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
  name: 'Wayfarer Classic',
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};

interface MarkerProps {
  name: string;
  image: string;
  rating: number;
  numReviews: number;
}

interface RatingProps {
  rating: number;
  numReviews: number;
}

function Rating({ rating, numReviews }: RatingProps) {
  return (
    <Box d="flex" alignItems="center">
      {Array(5)
        .fill('')
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill color='gold'
                key={i}
                style={{ marginLeft: '1' }}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf color='gold' key={i} style={{ marginLeft: '1' }} />;
          }
          return <BsStar color='gold' key={i} style={{ marginLeft: '1' }} />;
        })}
    </Box>
  );
}

export default function BoxMarker({name, image, rating, numReviews}: MarkerProps) {





  return (
      <Flex
      borderRadius={2}
      position={'absolute'}
      transform={'translate(-50%, -50%)'}
      zIndex={1}
      _hover={{zIndex: 2}}
      boxShadow={'lg'}
      cursor={'pointer'}
      w={120}
      h={100}
      backgroundColor='white'
      direction={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      paddingBottom={2}
      >
      <Box h={'25%'} marginTop={1}>
      <Text fontFamily={'sans-serif'}>
            {name}
          </Text>
      </Box>



        <Image
        marginTop={1}
        marginBottom={1}
        width={'90%'}
        h={'60%'}
        src={image}
        alt={'test'}/>

        <Box h={'15%'}>
        <Rating
        rating={rating} numReviews={numReviews}/>
        </Box>


      </Flex>
  );
}