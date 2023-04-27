import styled from "styled-components";

export const StyledButton = styled.button`
    outline: none;
    border: 1px solid white;
    background: transparent;
    color: white;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 600;
    padding: 5px 10px;

    &:hover {
        opacity: 95%;
        transform: scale(1.02);
    }
    &:disabled {
        cursor: not-allowed;
        opacity: .5;
    }
`;