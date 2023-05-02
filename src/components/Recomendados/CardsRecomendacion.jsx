import React from 'react';
import { CardRecomendacion } from './CardRecomendacion';
import { CardsContainer } from './CardsRecomendacionStyled';
import { useSelector } from 'react-redux';

export const CardsRecomendacion = () => {
  const { recommended } = useSelector(state => state.recommended)
  return (
    <CardsContainer gridLength={recommended.length}>
      {
        recommended.map((recomendado) => (
          <CardRecomendacion key={ recomendado.id } { ...recomendado }/>
        ))
      }
    </CardsContainer>
  )
};