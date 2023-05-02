import Button from '../UI/Button/Button';
import { CardProducto } from './CardProducto';
import { ProductosContainer } from './CardsProductosStyles';
import { useSelector } from 'react-redux';


export const CardsProductos = (genero) => {
    let { ropaHombre } = useSelector(state => state.ropaHombre);
    let { ropaMujer } = useSelector(state => state.ropaMujer);

    let gender = genero.genero.ruta;
    let elegido;

    if (gender == '/gender/men') {
        elegido = ropaHombre;
    } else if (gender == '/gender/women') {
        elegido = ropaMujer;
    }
    return (
        <ProductosContainer>
            {
                elegido.map(ropa => <CardProducto key={ropa.id} {...ropa}/>) 
            }
        </ProductosContainer>
    )
};