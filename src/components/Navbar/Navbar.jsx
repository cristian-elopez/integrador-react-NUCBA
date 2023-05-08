import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux';
import HamburgerMenu from "../../components/HamburgerMenu/HamburgerMenu";
import { toggleHiddenMenu } from "../../redux/navbar/navbarMenu-reducer";
import {
	NavbarConteinerStyled,
    LogoStyled,
    LinksContainerStyled,
    LinkContainerStyled,
    IconsContainerStyled,
    BiUserStyled,
    BiShoppingBagStyled,
    HamburgerMenuContainer,
    GiHamburgerMenuStyled
} from './NavbarStyles';

export const Navbar = ()=> {
    const { hiddenMenu } = useSelector(state => state.navbarMenu);
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    useEffect(() => {
        if(!hiddenMenu) {
          dispatch(toggleHiddenMenu());
        }
    }, [pathname]);

    return (
        <NavbarConteinerStyled>
            { !hiddenMenu && (
                <HamburgerMenuContainer>
                    <HamburgerMenu />
                </HamburgerMenuContainer>
            )}
            { hiddenMenu && (<GiHamburgerMenuStyled 
                onClick={()=>dispatch(toggleHiddenMenu())}/>
            )}
            <LinksContainerStyled>
                <Link to='/'>
                    <LinkContainerStyled> Inicio </LinkContainerStyled>
                </Link>
                <Link to='/help'>
                    <LinkContainerStyled> Ayuda </LinkContainerStyled>
                </Link>
                <LogoStyled 
                    src="https://res.cloudinary.com/dja0b7qbo/image/upload/v1682357016/PROYECTOS/GENOVA/IMAGES/genova-icon-white_brnuuq.png" 
                    alt="Logo" 
                />
                <Link to='/gender/women'>
                    <LinkContainerStyled> Mujer </LinkContainerStyled>
                </Link>
                <Link to='/gender/men'>
                    <LinkContainerStyled> Hombre </LinkContainerStyled>
                </Link>
            </LinksContainerStyled>
                <IconsContainerStyled>
                    <Link to='/login'>
                        <LinkContainerStyled>
                            <BiUserStyled />
                        </LinkContainerStyled>
                    </Link>
                    <Link to='/cart'> 
                        <LinkContainerStyled>
                            <BiShoppingBagStyled /> 
                        </LinkContainerStyled>
                    </Link>
                </IconsContainerStyled>
        </NavbarConteinerStyled>
    );
};
