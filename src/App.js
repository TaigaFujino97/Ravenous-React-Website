import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';
import './App.css';
import {ChakraProvider} from '@chakra-ui/react';
import { Component } from 'react';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <SearchBar />
        <BusinessList />
      </div>
    </ChakraProvider>
  );
}

export default App;
