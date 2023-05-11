import React from 'react';
import { Formik } from 'formik';

import LoginInput from '../../components/UI/LoginInput/LoginInput';

import {
  Form,
  LoginButtonGoogleStyled,
  LoginContainerStyled,
  LoginEmailStyled,
} from './RegisterStyles';
import { registerInitialValues, registerValidationSchema } from '../../formik';
// import { createUser, signInWithGoogle } from '../../firebase/firebase-utils';
import useRedirect from '../../hooks/useRedirect';
import { useLocation } from 'react-router-dom';
import Button from '../../components/UI/Button/Button';

const Register = () => {

  const { state } = useLocation();
  useRedirect(state?.redirectedFromCheckout ? '/checkout' : '/');
  
  return (
    <LoginContainerStyled>
      <h1>Crea tu cuenta</h1>
      <Formik
        initialValues={registerInitialValues}
        validationSchema={registerValidationSchema}
        onSubmit={e=>e.preventDefault()}
      >
        <Form>
          <LoginInput name='name' type='text' placeholder='Nombre' />
          <LoginInput name='email' type='text' placeholder='Email' />
          <LoginInput name='password' type='password' placeholder='Password' />
          <p>O podés ingresar con</p>
          <LoginButtonGoogleStyled
            type='button'
            onClick={e=>e.preventDefault()}
          >
            <img
              src='https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648432/coding/NucbaZappi/Assets/google-icon_jgdcr1.png'
              alt='Google logo'
            />
            Google
          </LoginButtonGoogleStyled>
          <LoginEmailStyled to='/login'>
            <p>¿Ya tenes cuenta? Inicia sesión</p>
          </LoginEmailStyled>
          <Button>
            Registrarte
          </Button>
        </Form>
      </Formik>
    </LoginContainerStyled>
  );
};

export default Register;