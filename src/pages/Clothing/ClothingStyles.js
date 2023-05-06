import styled from "styled-components";

export const ClothingContainer = styled.div`
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: 80%;
    max-width: 1200px;

    @media (max-width: 768px) {
        width: 100%;
        justify-content: center;
        gap: 10px;
    }
    @media (max-width: 425px) {
        flex-direction: column;
    }
`;
export const ImageContainer = styled.div`
    width: 50%;

    img {
        width: 100%;
        max-width: 600px;
        min-width: 300px;
    }
    @media (max-width: 425px) {
        width: 80%;
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
    @media (max-width: 768px) {
        h3 {
            font-size: 2rem;
        }
    }
    @media (max-width: 425px) {
        width: 80%;
        padding-bottom: 20px;
    }
`;
export const PriceContainer = styled.p`
    font-weight: 800;
`;