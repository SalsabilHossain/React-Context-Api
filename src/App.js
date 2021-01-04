import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import BookList from './components/BookList'
import BookContextProvider from './context/BookContext';

//import { ThemeContext } from './context/Themecontext';



function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
      </BookContextProvider>
    </div>
  );
}

export default App;

