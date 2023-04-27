import styled from 'styled-components';

// card
export const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid white;
    padding: 20px;
    width: 60%;

    :hover {
        background-color: #252525;
        box-shadow: 0px 0px 10px 2px #3E3E3E;
        -webkit-box-shadow: 0px 0px 10px 2px #3E3E3E;
        -moz-box-shadow: 0px 0px 10px 2px #3E3E3E;
    }
`;
export const CardImg = styled.img`
    width: 100%;
`;
export const CardText = styled.div``;

// cards
export const CardsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 20px;
`;