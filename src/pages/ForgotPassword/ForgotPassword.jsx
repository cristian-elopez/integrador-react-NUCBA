import React from 'react'
import { useNavigate } from 'react-router-dom';

import LoginInput from '../../components/UI/LoginInput/LoginInput';
import Submit from '../../components/UI/Submit/Submit';
import {
    ForgotContainerStyled
} from './ForgotPasswordStyles';

const ForgotPassword = () => {
    const navigate = useNavigate();
    return (
        <ForgotContainerStyled>
            <h1>Reestablece tu contraseña</h1>
        </ForgotContainerStyled>
    )
}

export default ForgotPassword;
