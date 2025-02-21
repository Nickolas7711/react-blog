import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthConteiner, AuthForm, AuthTitle, Authbtn, ButtonBox, CustomTextField } from './ModuleAuthStyles';
import { Context } from '../..';
import { ADMIN_ROUTE } from '../../utils/constsRouter';

export default function Auth() {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  // Данные администратора
  const adminCredentials = {
    username: 'admin',
    password: '1234' 
  };

  const handleSubmit = () => {
    if (login === adminCredentials.username && password === adminCredentials.password) {
      user.setIsAuth(true);
      navigate(ADMIN_ROUTE); 
    } else {
      alert('Неверный логин или пароль');
    }
  };

  return (
    <AuthConteiner>
      <AuthTitle>Hi, Please log in!</AuthTitle>
      <AuthForm>
        <CustomTextField
          id="User"
          label="User"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <CustomTextField
          id="Password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <ButtonBox>
          <Authbtn onClick={handleSubmit}>Submit</Authbtn>
        </ButtonBox>
      </AuthForm>
    </AuthConteiner>
  );
}
