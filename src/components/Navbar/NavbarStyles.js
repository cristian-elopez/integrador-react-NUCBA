import styled from "styled-components";
import { BiUser, BiShoppingBag } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';

export const NavbarConteinerStyled = styled.div`
	height: 150px;
	width: 80%;
	margin: auto;
	padding: 10px 0;
	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: 600px) {
		width: 100%;
	}
`;
export const LogoStyled = styled.img`
	width: 150px;
	padding: 10px 0;
	margin: 0;
	display: flex;
`;
export const LinksContainerStyled = styled.div`
	margin: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 50px;
`;
export const LinkContainerStyled = styled.div`
	color: white;

	:hover {
		opacity: .8;
	}
	@media (max-width: 580px) {
		display: none;
	}
`;
export const IconsContainerStyled = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 15px;
`;
export const BiUserStyled = styled(BiUser)`
	font-size: 1.5rem;
	cursor: pointer;	

	:hover {
		opacity: .8;
	}
`;
export const BiShoppingBagStyled = styled(BiShoppingBag)`
	font-size: 1.5rem;
	cursor: pointer;	

	:hover {
		opacity: .8;
	}
`;
export const HamburgerMenuContainer = styled.div`
	display: none;
	position: fixed;
	top: 0;
	left: 0;
	background-color: #18191a;
	width: 50%;
	height: 100vh;

	@media (max-width: 425px) {
        display: flex;
        justify-content: center;
        align-items: center;
		flex-direction: column;
		z-index: 1;
    }
`;
export const GiHamburgerMenuStyled = styled(GiHamburgerMenu)`
	display: none;
	font-size: 2rem;
	cursor: pointer;
	margin-left: 20px;

	:hover {
		opacity: .8;
	}

	@media (max-width: 600px) {
		display: flex;
		min-width: max-content;
		position: absolute;
		top: 50px;
		left: 5px;
	}
`;
