import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  AdminHeaderGrid, 
  AdminMainGrid, 
  AdminMenuGrid, 
  AdminNameGrid, 
  AdminWrapp, 
  NameTitleAdmin, 
  TitlePageAdmin
} from './ModuleAdminPageStyles';
import { GlobalStyles } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { ADMIN_PAGE_TITLES } from '../../utils/constNamePageAdmin';
import { ADMIN_CREAT_ARTICLE } from '../../utils/constsRouter';

export default function Admin() {

  const navigate = useNavigate();
  const location = useLocation();

  const getPageTitle = (pathname) => {
    if (pathname.startsWith('/admin/cms/edit/')) {
      return 'Редактирование статьи';
    }
    
    return ADMIN_PAGE_TITLES[pathname] || 'Админ панель';
  };

  const handleCreat = () => {
    navigate(ADMIN_CREAT_ARTICLE);
  };

  

  // Определяем заголовок по текущему пути
  const pageTitle = getPageTitle(location.pathname);

  return (
    <>
      <GlobalStyles styles={{
        body: {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
        },
      }} />
      <AdminWrapp container>
        <AdminNameGrid size={2}>
          <NameTitleAdmin>BlogTitle-Admin</NameTitleAdmin>
        </AdminNameGrid>
        <AdminHeaderGrid size={10}>
          <TitlePageAdmin>
            {pageTitle}
          </TitlePageAdmin>
          <button onClick={handleCreat}>Создать новую статью</button>
        </AdminHeaderGrid>
        <AdminMenuGrid size={2}>
          AdminMenuGrid
        </AdminMenuGrid>
        <AdminMainGrid size={10}>
          <Outlet />
        </AdminMainGrid>
      </AdminWrapp>
    </>
  );
};
