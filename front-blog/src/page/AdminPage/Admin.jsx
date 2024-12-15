import React from 'react';
import { AdminHeaderGrid, AdminMainGrid, AdminMenuGrid, AdminNameGrid, AdminWrapp, NameTitleAdmin } from './ModuleAdminPageStyles';
import { GlobalStyles } from '@mui/material';
import ArticlesListAdmin from '../../component/AdminArticles/ArticlesListAdmin';

export default function Admin() {
  return (
    <>
      <GlobalStyles styles={{
        body: {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
          // backgroundColor: '#f4f4f4', // Задайте нужный цвет или оставьте прозрачным
          // overflow: 'hidden', // Если нужно убрать скроллинг
        },
      }} />
    <AdminWrapp container>
  <AdminNameGrid size={2}>
     <NameTitleAdmin> BlogTitle-Admin</NameTitleAdmin>
  </AdminNameGrid>
  <AdminHeaderGrid size={10}>
    Article List
  </AdminHeaderGrid>
  <AdminMenuGrid size={2}>
     AdminMenuGrid
  </AdminMenuGrid>
  <AdminMainGrid size={10}>
    <ArticlesListAdmin />
  </AdminMainGrid>
  
</AdminWrapp>
</>
  );
};
