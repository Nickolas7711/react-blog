import React from 'react';
import { useLocation } from 'react-router-dom';
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

export default function Admin() {
  const location = useLocation();

  // Определяем заголовок по текущему пути
  const pageTitle = Object.keys(ADMIN_PAGE_TITLES).find((key) =>
    location.pathname.startsWith(key)
  ) 
    ? ADMIN_PAGE_TITLES[Object.keys(ADMIN_PAGE_TITLES).find((key) => location.pathname.startsWith(key))] 
    : 'Admin Panel';

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
