import React from 'react';
import { Link } from 'react-router-dom'
import {
    HamburgerMenuLinksContainer,
    LinkHamburgerMenu
} from './HamburguerMenuStyles';

const HamburgerMenu = (hiddenMenu) => {
  return (
    <HamburgerMenuLinksContainer
        hidden={hiddenMenu}>
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