import styled from "styled-components";

export const ProductosCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid white;
    padding: 20px;
    width: 25%;
    min-width: 140px;

    :hover {
        background-color: #252525;
        box-shadow: 0px 0px 10px 2px #3E3E3E;
        -webkit-box-shadow: 0px 0px 10px 2px #3E3E3E;
        -moz-box-shadow: 0px 0px 10px 2px #3E3E3E;
        cursor: pointer;
    }
`;
export const CardImg = styled.img`
    width: 100%;
`;
export const CardText = styled.div`
    color: white;
`;
export const ProductosContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    margin: 20px;
`;
export const PriceContainer = styled.p`
    font-weight: 800;
`;