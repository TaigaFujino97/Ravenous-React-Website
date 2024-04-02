import React from 'react';
import Business from './Business';
import { Flex } from '@chakra-ui/react';

function BusinessList(){
    const businesses = Array.from({ length: 9 }, (_, index) => <Business key={index} />);
  
    // Split the businesses array into chunks of 3 items each
    const rows = businesses.reduce((acc, curr, index) => {
      const chunkIndex = Math.floor(index / 3);
      if (!acc[chunkIndex]) {
        acc[chunkIndex] = [];
      }
      acc[chunkIndex].push(curr);
      return acc;
    }, []);
  
    return (
      <Flex className='business-list' flexDirection="column">
        {rows.map((row, rowIndex) => (
          <Flex key={rowIndex} className='business-row' justifyContent='space-evenly' mb={10} mt={10}>
            {row}
          </Flex>
        ))}
      </Flex>
    );
  };

export default BusinessList;