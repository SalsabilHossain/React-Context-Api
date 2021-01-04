import React, { useContext } from 'react'
import BookContextProvider, { BookContext } from '../context/BookContext';

const Navbar= () =>{
     const { books } = useContext(BookContext);
    return(
        <div>
            <h1>Reading List</h1>
    <p>You have {books.length}</p>
        </div>
    );
}


export default Navbar;