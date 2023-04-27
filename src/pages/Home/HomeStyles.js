import styled from "styled-components";

export const HomeWrapper = styled.div`
    width: 100%;
    margin: auto;
    max-width: 1500px;
`;
export const RecomendadosWrapper = styled.section`
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h2 {
        font-weight: 900;
    }
`;
export const GenderGeneralWrapper = styled.section`
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 40px;

    h3 {
        font-weight: 800;
    }
`;
export const GenderWrapper = styled.div`
    width: 50%;
    cursor: pointer;
    color: white;

    h3 {
        color: white;
    }
    img {
        width: 100%;
    }
    :hover {
        transform: scale(1.009);
    }
`;