import styled from "styled-components";

export const CategoriasContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
    margin: auto;
    user-select: none;
    width: 70%;

    @media (max-width: 425px) {
		flex-direction: column;
	}
`;
export const CardCategoria = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid white;
    padding: 10px;
    width: 100%;
    min-width: 110px;
    cursor: pointer;

    :hover {
        background-color: #252525;
        box-shadow: 0px 0px 10px 2px #3E3E3E;
        -webkit-box-shadow: 0px 0px 10px 2px #3E3E3E;
        -moz-box-shadow: 0px 0px 10px 2px #3E3E3E;
    }
    background-color: ${({ selected }) =>
    selected ? '#3E3E3E' : 'transparent'};
`;
export const CardImg = styled.img`
    width: 100%;

    @media (max-width: 425px) {
		display: none;		
	}
`;
export const CardText = styled.div``;