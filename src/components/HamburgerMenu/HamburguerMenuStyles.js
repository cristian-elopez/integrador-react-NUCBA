import styled from "styled-components";

export const HamburgerMenuLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hidden {
	display: none;
  }
`;
export const LinkHamburgerMenu = styled.div`
	display: flex;
	color: white;
	padding: 10px;

	:hover {
		opacity: .8;
	}
`;