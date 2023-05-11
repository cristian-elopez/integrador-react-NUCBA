import styled from "styled-components";

export const HelpContainer = styled.div`
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px;

    h1 {
        font-weight: 800;
        margin: auto;
        margin-left: 10px;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    @media (max-width: 425px) {
        width: 100%;
    }
`;
export const PreguntasContainer = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    border: 1px solid white;
    margin: auto;
    padding: 10px;
    width: 100%;

    p {
        margin: 0;
        padding: 0;
    }
    @media (max-width: 425px) {
        width: 90%;
    }
`;