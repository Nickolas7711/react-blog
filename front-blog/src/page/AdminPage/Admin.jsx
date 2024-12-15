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
