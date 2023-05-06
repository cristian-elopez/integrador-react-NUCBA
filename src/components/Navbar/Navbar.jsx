import React from "react";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux';
import HamburgerMenu from "../../components/HamburgerMenu/HamburgerMenu";
import { toggleMenu } from '../../redux/navbar/navbar-actions';
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
    const dispatch = useDispatch()
    const hiddenMenu = useSelector(state => state.navbar.hidden);

    return (
        <NavbarConteinerStyled>
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
            <HamburgerMenuContainer>
                <GiHamburgerMenuStyled 
                    onClick={()=> dispatch(toggleMenu(<HamburgerMenu hiddenMenu/>))}
                    isHidden={hiddenMenu}
                />
                <HamburgerMenu />
            </HamburgerMenuContainer>
        </NavbarConteinerStyled>
    );
};
