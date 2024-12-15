import React from 'react';
import { AuthConteiner, AuthForm, AuthTitle, Authbtn, ButtonBox, CustomTextField } from './ModuleAuthStyles';


export default function Auth() {
  return (
    <AuthConteiner>
      <AuthTitle>Hi, Plaese log in!!!</AuthTitle>
      <AuthForm>
      <CustomTextField id="User" label="User" />
      <CustomTextField id="E-mail" label="E-mail" />
      <CustomTextField id="Password" label="Password" />
      <ButtonBox>
        <Authbtn>Submit</Authbtn>
        </ButtonBox>      
    </AuthForm>
    </AuthConteiner>
  );
};
