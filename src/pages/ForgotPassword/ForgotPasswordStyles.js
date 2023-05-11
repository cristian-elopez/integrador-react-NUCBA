import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const ForgotContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 405px) {
    h1 {
      width: 50%;
      margin: auto;
      text-align: center;
    }
  }
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const ForgotEmailStyled = styled.p`
  color: white;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;