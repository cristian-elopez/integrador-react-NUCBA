import React from 'react';
import { CardRecomendacion } from './CardRecomendacion';
import { CardsContainer } from './CardsRecomendacionStyled';
import { recommended } from '../../data/Recommended';


export const CardsRecomendacion = () => {
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