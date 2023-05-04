import React from 'react';
import Button from '../../components/UI/Button/Button';
import { formatPrice } from '../../utils/formatPrice';
import { useDispatch, useSelector } from 'react-redux';
import * as cartActions from '../../redux/cart/cart-actions';
import {
  ClothingContainer,
  ImageContainer,
  InfoContainer,
  PriceContainer
} from './ClothingStyles';

const Clothing = () => {
  const { prendaElegida } = useSelector(state => state.prenda);
  const { id, tittle, img, desc, price, category } = prendaElegida;
  const dispatch = useDispatch();

  return (
    <ClothingContainer>
      <ImageContainer>
        <img src={img} alt={tittle} />
      </ImageContainer>
      <InfoContainer>
        <h3>{tittle}</h3>
        <p>{desc}</p>
        <PriceContainer>Precio: {formatPrice(price)}</PriceContainer>
        <p>Categoría: {category}</p>
        <Button onClick={
          () => dispatch(
          cartActions.addToCart({ id, tittle, img, desc, price, category }))}>Agregar al carrito</Button>
      </InfoContainer>
    </ClothingContainer>
  )
};

export default Clothing;
