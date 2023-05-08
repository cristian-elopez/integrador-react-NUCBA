import styled from "styled-components";
import { AiOutlineMinus,AiOutlinePlus } from 'react-icons/ai';

export const InfoPrenda = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid white;

    img {
        width: 100px;
    }
    div {
        display: flex;
        gap: 5px;

        p {
            width: 20%;

            @media (max-width: 768px) {
                width: 100%;
                margin: 5px auto;
                display: flex;
                justify-content: center;
            }
        }
    }
    @media (max-width: 768px) {
		flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
            width: 100%;
        }
        div {
            margin: auto;
            justify-content: center;
            align-items: center;
        }
	}
`;
export const AiOutlineMinusStyled = styled(AiOutlineMinus)`
    margin: 15px auto;
    cursor: pointer;
`;
export const AiOutlinePlusStyled = styled(AiOutlinePlus)`
    margin: 15px auto;
    cursor: pointer;
`;
export const ImageContainer = styled.div`
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`;