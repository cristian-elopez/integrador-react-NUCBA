import React from 'react';
import Button from '../../components/UI/Button/Button';
import { formatPrice } from '../../utils/formatPrice';
import { 
  InfoTotalCart,
  ContainerInfoPrenda,
  ContainerTitulosInfo,
  ContainerTotalCarrito,
  PrecioTotal,
  ContainerAllProducts
} from './CartStyles';
import CardProduct from '../../components/CardProduct/CardProduct';

const Cart = () => {
  let prenda = {
    id: 1,
    tittle: 'Buzo Hombre 1',
    img: 'https://res.cloudinary.com/dja0b7qbo/image/upload/v1682563414/PROYECTOS/GENOVA/MODELS/retrato-modelo-hombre_thirr9.jpg',
    desc: '',
    price: 1000,
    category: 'Buzos'
  }
  return (
    <InfoTotalCart>
      <ContainerInfoPrenda>
        <ContainerTitulosInfo>
          <p>PRODUCTO SELECCIONADO</p>
          <p>PRECIO</p>
          <p>CANTIDAD</p>
          <p>SUBTOTAL</p>
        </ContainerTitulosInfo>
        <ContainerAllProducts>
          <CardProduct
            id={prenda.id}
            tittle={prenda.tittle}
            img={prenda.img}
            desc={prenda.desc}
            price={prenda.price}
            category={prenda.category}
          />
        </ContainerAllProducts>
      </ContainerInfoPrenda>
      <ContainerTotalCarrito>
        <h3>Total del carrito</h3>
        <div>
          <p>Subtotal</p>
          <p>{formatPrice(1000)}</p>
        </div>
        <div>
          <p>Envio</p>
          <p>Calcular Envio</p>
        </div>
        <div>
          <p>TOTAL</p>
          <PrecioTotal>{formatPrice(1000)}</PrecioTotal>
        </div>
        <Button>FINALIZAR COMPRA</Button>
      </ContainerTotalCarrito>
    </InfoTotalCart>
  )
}

export default Cart