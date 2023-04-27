import styled, { css } from "styled-components";
import { BiUser, BiShoppingBag } from 'react-icons/bi';

export const NavbarConteinerStyled = styled.div`
	height: 150px;
	width: 80%;
	margin: 0 auto;
	padding: 10px 0;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const LogoStyled = styled.img`
	width: 150px;
	margin: 0;
	padding: 0;
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
`
export const BiShoppingBagStyled = styled(BiShoppingBag)`
	font-size: 1.5rem;
	cursor: pointer;	

	:hover {
		opacity: .8;
	}
`