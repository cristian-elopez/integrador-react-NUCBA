import styled from "styled-components";
import { AiOutlineClose } from 'react-icons/ai';

export const HamburgerMenuLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const LinkHamburgerMenu = styled.div`
	display: flex;
	color: white;
	font-weight: 800;
	font-size: 1.2rem;
	padding: 30px;

	:hover {
		opacity: .8;
	}
`;
export const AiOutlineCloseStyled = styled(AiOutlineClose)`
	font-size: 2rem;
	cursor: pointer;
	position: absolute;
	top: 50px;
	right: 20px;

	:hover {
		opacity: .8;
	}
`;