import React, { useState } from 'react'
import './style.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/pages/Gallery';
import Favourites from './components/pages/Favourites';
import Search from './components/Search'

import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [ currentPage, setCurrentPage] = useState(0);
  function renderPage(){
    switch (currentPage){
      case 0:
        return (
        <div>  
        <Search/>  
        <Gallery/>
        </div>
        );
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

