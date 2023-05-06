import React from 'react';
import useRedirect from '../../../hooks/useRedirect';

import { InputContainerStyled, LoginInputStyled } from './LoginInputStyles';

const LoginInput = ({ name, type, placeholder }) => {

  useRedirect('/');
  
  return (
      <InputContainerStyled>
        <LoginInputStyled 
          name={name}
          type={type} 
          placeholder={placeholder} 
          />
      </InputContainerStyled>
  );
};

export default LoginInput;