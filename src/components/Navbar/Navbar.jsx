import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import * as userActions from '../../redux/user/user-actions';

import {
	NavbarConteinerStyled,
    LogoStyled,
    LinksContainerStyled,
    LinkContainerStyled,
    IconsContainerStyled,
    BiUserStyled,
    BiShoppingBagStyled
} from './NavbarStyles';

export const Navbar = ()=> {
    // const navigate = useNavigate();
    // const currentUser = useSelector(state => state.user.currentUser);
    // const dispatch = useDispatch();

    return (
        <NavbarConteinerStyled>
            <LinksContainerStyled>
                <Link to='/'>
                    <LinkContainerStyled>
                        Inicio
                    </LinkContainerStyled>
                </Link>
                <Link to='/'>
                    <LinkContainerStyled>
                        Ayuda
                    </LinkContainerStyled>
                </Link>
                <Link to='/'>
                    <LogoStyled 
                        src="https://res.cloudinary.com/dja0b7qbo/image/upload/v1682357016/PROYECTOS/GENOVA/IMAGES/genova-icon-white_brnuuq.png" 
                        alt="Logo" 
                    />
                </Link>
                <Link to='/'>
                    <LinkContainerStyled>
                        Mujer
                    </LinkContainerStyled>
                </Link>
                <Link to='/'>
                    <LinkContainerStyled>
                        Hombre
                    </LinkContainerStyled>
                </Link>
            </LinksContainerStyled>
                <IconsContainerStyled>
                    <BiUserStyled />
                    <BiShoppingBagStyled />
                </IconsContainerStyled>
        </NavbarConteinerStyled>
    );
};
