import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';
import Business from './components/Business';
import './App.css';
import {ChakraProvider, Heading, Flex, Img, Box} from '@chakra-ui/react';
import { Component } from 'react';

function App() {
  
  const businesses = Array.from({ length: 9 }, (_, index) => <Business key={index} />);

  return (
    <ChakraProvider>
      <Heading textAlign='center' backgroundColor='goldenrod' textColor='white' padding={5}>ravenous</Heading>
      <div className="App">
        <SearchBar />
        <BusinessList businesses={businesses}/>
      </div>
    </ChakraProvider>
  );
}

export default App;
