import { CardProducto } from './CardProducto';
import { ProductosContainer } from './CardsProductosStyles';
import { useSelector } from 'react-redux';

const GeneroElegido = (genero) => {
    let { ropaHombre } = useSelector(state => state.ropaHombre);
    let { ropaMujer } = useSelector(state => state.ropaMujer);

    let gender = genero.genero.ruta;
    let elegido;

    if (gender == '/gender/men') {
        elegido = ropaHombre;
    } else if (gender == '/gender/women') {
        elegido = ropaMujer;
    };
    return elegido;
};

export const CardsProductos = (genero) => {
    let elegido = GeneroElegido(genero);
    const selectedCategory = useSelector(state => state.categories.selectedCategory);

    if (selectedCategory) {
        elegido = elegido.filter(prenda => prenda.category === selectedCategory)
    };

    return (
        <ProductosContainer>
            {
                elegido.map(ropa => <CardProducto key={ropa.id} {...ropa}/>) 
            }
        </ProductosContainer>
    )
};