import styled from "styled-components";

export const InfoTotalCart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    margin: auto;
    gap: 20px;
`;
export const ContainerInfoPrenda = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
`;
export const ContainerTitulosInfo = styled.div`
    display: flex;
    justify-content: space-between;
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