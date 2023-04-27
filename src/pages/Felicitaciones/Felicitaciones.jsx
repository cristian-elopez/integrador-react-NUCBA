import { useNavigate } from "react-router-dom";

import {
    ContainerInfoStyled,
    TittleStyled
} from './FelicitacionesStyled';

const Felicitaciones = () => {
    const navigate = useNavigate();
    return (
        <ContainerInfoStyled>
            <TittleStyled>¡Felicitaciones!</TittleStyled>
            <p>Tu pedido fué realizado con éxito</p>
        </ContainerInfoStyled>
    )
}

export default Felicitaciones;