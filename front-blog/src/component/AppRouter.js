import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from '../routes';
import { NotFound } from './NotFound';
import { Template } from './Templates';
import { Auth } from '../page/AuthPage';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { Admin } from './AdminTemplates';
import ArticlesListAdmin from './AdminArticles/ArticlesListAdmin';
import EditArticle from '../page/EditArticlePage/EditArticle';
import { ADMIN_EDIT_ARTICLE, ADMIN_ROUTE, AUTH_ROUTE } from '../utils/constsRouter';

const AppRouter = observer(() => {
  const { user } = useContext(Context);
 console.log(user);
  return (
    <Routes>
      <Route path='/*' element={<NotFound />} />
      <Route path='/admin' element={<Auth />} />
      
      
      {user.isAuth && (
        <Route path={ AUTH_ROUTE } element={<Admin />} >  
        <Route path={ADMIN_ROUTE} element={<ArticlesListAdmin />} />
        <Route path={ADMIN_EDIT_ARTICLE} element={<EditArticle />} />
        </Route>
      )}

      <Route element={<Template />} >
      {publicRoutes.map(({path, Component}) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      </Route>
    </Routes>
  );
});

export default AppRouter;
