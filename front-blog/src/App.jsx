import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../src/page/HomePage';
import { Template } from './component/Templates'
import { About } from '../src/page/AboutPage';
import { ContactMe } from '../src/page/ContactMePage';
import { NotFound } from './component/NotFound';
import { ArticleBlog } from './page/BlogArticle';
import { Auth } from './page/AuthPage';
import { Admin } from './page/AdminPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<NotFound />} />
        <Route element={<Template />} >
          <Route path="/" element={<Home />} />
          <Route path='/blogs/home' element={<Home />} />
          <Route path='/blogs/about' element={<About />} />
          <Route path='/blogs/contactMe' element={<ContactMe />} />
          <Route path='/article/:id' element={<ArticleBlog/>} />
        </Route>
        <Route>
          <Route path='/admin' element={<Auth />} />
          <Route path='/admin/cms' element={<Admin />} />
        </Route>
      </Routes>
      
    </BrowserRouter>
  )
};

export default App;
