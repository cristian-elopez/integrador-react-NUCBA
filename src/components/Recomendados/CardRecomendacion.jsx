import React from 'react';
import Button from '../UI/Button/Button';
import { formatPrice } from '../../utils/formatPrice';
import { useDispatch } from 'react-redux';
import * as cartActions from '../../redux/cart/cart-actions';
import {
  Card,
  CardImg,
  CardText
} from './CardsRecomendacionStyled';

export const CardRecomendacion = ({ id, tittle, img, desc, price, category }) => {
  const dispatch = useDispatch()
  return (
    <Card>
      <CardImg 
        src={img}
        alt={tittle}
      />
      <CardText>
        <h3>{tittle}</h3>
        <p> {desc} </p>
        <p> {formatPrice(price)} </p>
      </CardText>
      <Button onClick={
        () => dispatch(
          cartActions.addToCart({ id, tittle, img, desc, price, category })
        )}>Agregar al carrito</Button>
    </Card> 
  )
};