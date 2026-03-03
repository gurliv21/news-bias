import { Routes, Route, Router } from "react-router-dom";
import { useState } from 'react';
import Footer from './components/Footer';
import Heading from './components/Heading';
import Layout from './Layout';
import NewsArticle from "./NewsArticle";

function App() {
  return (
    <>

       <Heading/>
       <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path="/article" element={<NewsArticle/>}/>
        </Routes>

       <Footer/>
    
    </>
  );
}

export default App;
