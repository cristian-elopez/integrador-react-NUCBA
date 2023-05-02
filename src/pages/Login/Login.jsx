import React from 'react'
import { Link } from 'react-router-dom';
import LoginInput from '../../components/UI/LoginInput/LoginInput';
import Submit from '../../components/UI/Submit/Submit';
import {
    LoginContainerStyled,
    Form
} from './LoginStyles';

const Login = () => {
  return (
    <LoginContainerStyled>
        <h1>Iniciar Sesión</h1>
        <Form>
          {/* <LoginInput placeholder="Usuario" />
          <LoginInput placeholder="Contraseña" type="password" />
          <Submit>Iniciar Sesión</Submit> */}
        </Form>
    </LoginContainerStyled>
  )
}

export default Login;