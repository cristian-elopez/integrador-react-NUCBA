import React from 'react';
import { formatPrice } from '../../utils/formatPrice';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { openClothing } from '../../redux/prenda/prenda-actions';
import {
  ProductosCard,
  CardImg,
  CardText,
  PriceContainer
} from './CardsProductosStyles';

export const CardProducto = ({ id, tittle, img, desc, price, category }) => {
  const dispatch = useDispatch();

  return (
    <ProductosCard
      onClick={ ()=> dispatch(openClothing( {id, tittle, img, desc, price, category} )) }>
        <Link to={`/clothing/:${id}`}>
        <CardImg 
          src={img}
          alt={tittle}
        />
        <CardText>
          <h3>{tittle}</h3>
          <p> {desc} </p>
          <PriceContainer> {formatPrice(price)} </PriceContainer>
        </CardText>
        </Link>
      </ProductosCard>
  )
};