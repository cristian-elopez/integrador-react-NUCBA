import React from "react";
import { Link } from "react-router-dom";
import { MdGpsFixed } from 'react-icons/md';
import { AiFillCreditCard, AiFillBank, AiOutlineDollarCircle } from 'react-icons/ai';

import {
    FooterContainerStyled,
    FooterColumnsContainer,
    TittleColumnFotter,
    ColumnsContein,
    LinkContainerStyled,
    InfoCopyrigthStyled
} from './FooterStyles';

export const Footer = () => {
    return (
        <FooterContainerStyled>
            <FooterColumnsContainer>
                <ColumnsContein>
                    <TittleColumnFotter>METODOS DE PAGO</TittleColumnFotter>
                    <div>
                        <AiFillCreditCard /> Cuotas con débito sin interés
                    </div>
                    <div>
                        <AiFillBank /> Transferencia bancaria - Depósito
                    </div>
                    <div>
                        <AiOutlineDollarCircle /> Efectivo cuando retiro
                    </div>
                </ColumnsContein>
                <ColumnsContein>
                    <TittleColumnFotter>LOCALES</TittleColumnFotter>
                    <Link to='/'>
                        <LinkContainerStyled>
                            <MdGpsFixed /> Algún lugar, Centro, Córdoba
                        </LinkContainerStyled>
                    </Link>
                    <Link to='/'>
                        <LinkContainerStyled>
                            <MdGpsFixed /> Algún lugar, Centro, Córdoba
                        </LinkContainerStyled>
                    </Link>
                    <Link to='/'>
                        <LinkContainerStyled>
                            <MdGpsFixed /> Algún lugar, Centro, Córdoba
                        </LinkContainerStyled>
                    </Link>
                </ColumnsContein>
                <ColumnsContein>
                    <TittleColumnFotter>PREGUNTAS FRECUENTES</TittleColumnFotter>
                    <Link to='/help'>
                        <LinkContainerStyled>
                            ¿Como realizar un pedido?
                        </LinkContainerStyled>
                    </Link>
                    <Link to='/help'>
                        <LinkContainerStyled>
                            Envio
                        </LinkContainerStyled>
                    </Link>
                    <Link to='/help'>
                        <LinkContainerStyled>
                            Cambios
                        </LinkContainerStyled>
                    </Link>
                </ColumnsContein>
            </FooterColumnsContainer>
            <InfoCopyrigthStyled>© 2023 Génova Indumentaria. Todos los derechos reservados - Diseñada por <strong>Cristian Lopez</strong></InfoCopyrigthStyled>
        </FooterContainerStyled>
    )
};