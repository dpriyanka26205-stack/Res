import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Home from './Home';
import Recipies from './Recipies';
import Blog from './Blog';
import AboutMe from './AboutMe';
import BlogDetail from './BlogDetails';
import RecipeDetail from './RecipeDetails';
import PrivacyPolicy from './PrivacyPolicy';
  
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
 return  (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe" element={<Recipies />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  ); 

}
export default App
