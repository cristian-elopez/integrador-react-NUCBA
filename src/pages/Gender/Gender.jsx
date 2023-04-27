import React from 'react';
import { CardsProductos } from '../../components/Productos/CardsProductos';
import { GenderContainerStyles } from './GenderStyles';

const Gender = () => {
  return (
    <GenderContainerStyles>
            <CardsProductos />
    </GenderContainerStyles>
  )
};

export default Gender;