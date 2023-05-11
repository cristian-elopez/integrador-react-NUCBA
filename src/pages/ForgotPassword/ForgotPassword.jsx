import React from 'react';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import LoginInput from '../../components/UI/LoginInput/LoginInput';
import Button from '../../components/UI/Button/Button';
import {
  ForgotContainerStyled,
  ForgotEmailStyled,
  Form,
} from './ForgotPasswordStyles';
import { forgotPasswordInitialValues, forgotPasswordValidationSchema } from '../../formik';
import useRedirect from '../../hooks/useRedirect';

const ForgotPassword = () => {
  const navigate = useNavigate();

  useRedirect('/');

  return (
    <ForgotContainerStyled>
      <h1>Reestablece tu contraseña</h1>
      <Formik
        initialValues={forgotPasswordInitialValues}
        validationSchema={forgotPasswordValidationSchema}
        onSubmit={e=>e.preventDefault()}
      >
        <Form>
          <LoginInput name='email' type='text' placeholder='Mail de recuperación' />
          <ForgotEmailStyled onClick={() => navigate('/login')}>
            ¿Ya te acordaste la contraseña? Volvé
          </ForgotEmailStyled>
          <Button>
            Ingresar
          </Button>
        </Form>
      </Formik>
    </ForgotContainerStyled>
  );
};

export default ForgotPassword;