import React from 'react';
import { Box, Flex, Input, Button, ButtonGroup } from '@chakra-ui/react';
import backgroundImage from 'C:/Users/fujin/Documents/GitHub/ravenous/src/images/wood.jpg';

function SearchBar(){
    return (
    <Box
        className='search-bar'
        textAlign="center"
        backgroundImage={`url(${backgroundImage})`} // Set the background image
        backgroundSize='cover'
        backgroundPosition='center'
        minHeight='150px'
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        >
        <ButtonGroup className='search-filters' mt={4} mb={4}>
          <Button id='best-match-button' colorScheme='blackAlpha'>Best Match</Button>
          <Button id='highest-rated-button' colorScheme='blackAlpha'>Highest Rated</Button>
          <Button id='most-viewed-button' colorScheme='blackAlpha'>Most Viewed</Button>
        </ButtonGroup>
        <Flex className='search-inputs' alignItems="center" mb={4}>
          <Input type='text' placeholder='Search Businesses' id='search-business' variant='filled' _focus={{ bg: 'yellow.100', borderColor: 'yellow.500' }} ms={5} me={5}></Input>
          <Input type='text' placeholder='Where?' id='search-where' variant='filled' _focus={{ bg: 'yellow.100', borderColor: 'yellow.500' }} me={5}></Input>
        </Flex>
        <Flex className='search-button' alignItems="center" justifyContent="center" mb={4}>
          <Button id='search-button' bgColor='goldenrod' _hover={{ bgColor: 'darkgoldenrod' }} size='lg'>Let's Go</Button>
        </Flex>
      </Box>
    );
  };
export default SearchBar;