import React from 'react'
import LoginInput from '../../components/UI/LoginInput/LoginInput';
import Button from '../../components/UI/Button/Button';
import {
    LoginContainerStyled,
    Form
} from './LoginStyles';

const Login = () => {
  return (
    <LoginContainerStyled>
        <h1>Iniciar Sesión</h1>
          <Form>
            <LoginInput name='email' type='text' placeholder='Email' />
            <LoginInput name='password' type='password' placeholder='Password' />
            <Button>Ingresar</Button>
          </Form>
    </LoginContainerStyled>
  )
}

export default Login;