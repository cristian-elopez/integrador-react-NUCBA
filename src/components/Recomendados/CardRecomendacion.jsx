import React from 'react';
import Button from '../UI/Button/Button';
import { formatPrice } from '../../utils/formatPrice';
import {
  Card,
  CardImg,
  CardText
} from './CardsRecomendacionStyled';

export const CardRecomendacion = ({ id, tittle, img, desc, price, f_category, s_category}) => {
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
      <Button onClick={e => e.preventDefault()}>Agregar</Button>
    </Card> 
  )
};