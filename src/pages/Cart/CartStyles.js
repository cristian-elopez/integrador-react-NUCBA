import styled from "styled-components";
import { BiTrashAlt } from 'react-icons/bi'

export const InfoTotalCart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    margin: auto;
    gap: 20px;

    @media (max-width: 768px) {
		flex-direction: column;
        width: 100%;
	}
`;
export const ContainerInfoPrenda = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;

    @media (max-width: 768px) {
		flex-direction: column;
	}
    @media (max-width: 425px) {
        width: 90%;
    }
`;
export const ContainerTitulosInfo = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
		display: none;
	}
`;
export const ContainerTotalCarrito = styled.div`
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    padding: 15px 30px;

    h3 {
        font-weight: 800;
    }
    div {
        display: flex;
        justify-content: space-between;
    }
`;
export const PrecioTotal = styled.p`
    font-weight: 800;
`;
export const ContainerAllProducts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
export const BiTrashStyled = styled(BiTrashAlt)`
    font-size: 1.5rem;
    color: white;
`;
export const MensajeVacio = styled.h3`
    margin: 30px auto;
`;