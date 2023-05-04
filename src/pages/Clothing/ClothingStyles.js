import styled from "styled-components";

export const ClothingContainer = styled.div`
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: 80%;
    max-width: 1200px;
`;
export const ImageContainer = styled.div`
    width: 50%;

    img {
        width: 100%;
        max-width: 600px;
    }
`;
export const InfoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 30%;
    height: 100%;
    border: 1px solid white;

    h3 {
        font-size: 3rem;
        width: 70%;
    }
`;
export const PriceContainer = styled.p`
    font-weight: 800;
`;