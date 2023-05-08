import React from 'react';
import { Link } from 'react-router-dom';
import {
    HamburgerMenuLinksContainer,
    LinkHamburgerMenu,
    AiOutlineCloseStyled
} from './HamburguerMenuStyles';
import { useDispatch } from 'react-redux';
import { toggleHiddenMenu } from '../../redux/navbar/navbarMenu-reducer';

const HamburgerMenu = () => {
    const dispatch = useDispatch();
  return (
    <HamburgerMenuLinksContainer>
        <AiOutlineCloseStyled onClick={()=>dispatch(toggleHiddenMenu())}/>
        <Link to='/'>
            <LinkHamburgerMenu> Inicio </LinkHamburgerMenu>
        </Link>
        <Link to='/help'>
            <LinkHamburgerMenu> Ayuda </LinkHamburgerMenu>
        </Link>
        <Link to='/gender/women'>
            <LinkHamburgerMenu> Mujer </LinkHamburgerMenu>
        </Link>
        <Link to='/gender/men'>
            <LinkHamburgerMenu> Hombre </LinkHamburgerMenu>
        </Link>
        <Link to='/login'>
            <LinkHamburgerMenu> Login </LinkHamburgerMenu>
        </Link>
        <Link to='/cart'>
            <LinkHamburgerMenu> Carrito </LinkHamburgerMenu>
        </Link> 
    </HamburgerMenuLinksContainer>
  )
}

export default HamburgerMenu;