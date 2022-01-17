import React, { useState} from 'react'
import './style.css'
// import {API_KEY} from './Keys'
import Header from './components/Header';
import Footer from './components/Footer';

import Favourites from './components/pages/Favourites';
import Search from './components/Search'

import 'bootstrap/dist/css/bootstrap.css';

export default function App() {
  const [ currentPage, setCurrentPage] = useState(0);
  
  function renderPage(){
    switch (currentPage){
      case 0:
        return <Search/>     
        
      case 1:
        return <Favourites/>;
    }
  }

   

  return (
    <div>
      <Header setCurrentPage =  {setCurrentPage} />
      {renderPage()}
      <Footer/>        
    </div>
  );
};

