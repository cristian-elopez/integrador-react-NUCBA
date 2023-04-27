import React from 'react'
import { Link } from 'react-router-dom';
import LoginInput from '../../components/UI/LoginInput/LoginInput';
import Submit from '../../components/UI/Submit/Submit';
import {
    LoginContainerStyled
} from './LoginStyles';

const Login = () => {
  return (
    <LoginContainerStyled>
        <h1>Iniciar Sesión</h1>
    </LoginContainerStyled>
  )
}

export default Login;