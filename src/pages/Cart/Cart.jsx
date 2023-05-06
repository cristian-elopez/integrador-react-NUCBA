import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/UI/Button/Button';
import { formatPrice } from '../../utils/formatPrice';
import CardProduct from '../../components/CardProduct/CardProduct';
import * as cartActions from '../../redux/cart/cart-actions';
import { 
  InfoTotalCart,
  ContainerInfoPrenda,
  ContainerTitulosInfo,
  ContainerTotalCarrito,
  PrecioTotal,
  ContainerAllProducts,
  BiTrashStyled,
  MensajeVacio
} from './CartStyles';
import Increase from '../../components/UI/Increase/Increase';

const Cart = () => {
  const { cartItems, shippingCost } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0);

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
          {
            cartItems.length ? (
              cartItems.map(item => (
                <CardProduct key={item.id} {...item} />
              )) 
            ) : (
              <MensajeVacio>No hay productos en el carrito</MensajeVacio>
            )
          } 
          <Increase 
            onClick={()=> dispatch(cartActions.clearCart())}
            disabled={!cartItems.length}>
            <BiTrashStyled />
          </Increase>
        </ContainerAllProducts>
      </ContainerInfoPrenda>
      <ContainerTotalCarrito>
        <h3>Total del carrito</h3>
        <div>
          <p>Subtotal</p>
          <p>{formatPrice(totalPrice)}</p>
        </div>
        <div>
          <p>Envio</p>
          <p>{formatPrice(shippingCost)}</p>
        </div>
        <div>
          <p>TOTAL</p>
          <PrecioTotal>{formatPrice(totalPrice + shippingCost)}</PrecioTotal>
        </div>
        <Button
          disabled={!cartItems.length}
          >FINALIZAR COMPRA
        </Button>
      </ContainerTotalCarrito>
    </InfoTotalCart>
  )
}

export default Cart