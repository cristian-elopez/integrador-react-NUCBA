import Button from '../UI/Button/Button';
import { CardProducto } from './CardProducto';

import { ProductosContainer } from './CardsProductosStyles';
import { RopaHombre } from '../../data/MaleClothing';
import { RopaMujer } from '../../data/WomenClothing';

export const CardsProductos = () => {
    return (
        <ProductosContainer>
            {/* si la pag es de hombre */}
            {
                RopaHombre.map(ropa => <CardProducto key={ropa.id} {...ropa}/>) 
            }
            {/* si la pag es de mujeres */}
            {
                RopaMujer.map(ropa => <CardProducto key={ropa.id} {...ropa}/>)
            }
        </ProductosContainer>
    )
};