import React from 'react';
import { Box, Flex, Heading, Img } from '@chakra-ui/react';

function Business(){
    const business = {
        imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
        name: 'MarginOtto Pizzeria',
        address: '1010 Paddington Way',
        city: 'Flavortown',
        state: 'NY',
        zipCode: '10101',
        category: 'ITALIAN',
        rating: 4.5,
        reviewCount: 90
    };

    return(
        <Box className='business'>
            <Flex className='image-container' justifyContent='center'>
                <Img src={business.imageSrc} alt='Delicious food' boxSize='300px'/>
            </Flex>
            <Heading as='h1' id='businessName' size='lg' mt={4} mb={2}>
                {business.name}
            </Heading>
            <Flex className='info-container' justifyContent='space-between'>
                <Flex className='address-container' flexDirection='column' alignItems='flex-start'>
                    <p id='address'>{business.address}</p>
                    <p id='city'>{business.city}</p>
                    <p id='state'>{business.state} {business.zipCode}</p>
                </Flex>
                <Flex className='review-container' flexDirection='column' alignItems='flex-end'> 
                        <Heading as='h2' id='category' size='md' color='gold'>{business.category}</Heading>
                        <Heading as='h3' id='rating' size='sm' color='gold'>{business.rating} STARS</Heading>
                        <p id='reviewCount'>{business.reviewCount} reviews</p>
                </Flex>
            </Flex>
        </Box>
    );
  };

  export default Business;