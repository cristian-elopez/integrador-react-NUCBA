import styled from "styled-components";
import { BiUser, BiShoppingBag } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';

export const NavbarConteinerStyled = styled.div`
	height: 150px;
	width: 80%;
	margin: 0 auto;
	padding: 10px 0;
	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: 425px) {
		flex-direction: column;
		height: max-content;
	}
`;

export const LogoStyled = styled.img`
	width: 150px;
	margin: auto;
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
	@media (max-width: 425px) {
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
	margin: 10px 0;

	@media (max-width: 425px) {
        display: flex;
        justify-content: center;
        align-items: center;
		flex-direction: column;
    }
`;
export const GiHamburgerMenuStyled = styled(GiHamburgerMenu)`
	display: none;
	font-size: 2rem;
	cursor: pointer;
	margin: 10px;

	:hover {
		opacity: .8;
	}

	@media (max-width: 425px) {
		display: flex;
	}
`;