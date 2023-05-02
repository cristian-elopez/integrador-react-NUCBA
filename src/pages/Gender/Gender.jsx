import React from 'react';
import { CardsProductos } from '../../components/Productos/CardsProductos';
import { GenderContainerStyles } from './GenderStyles';
import { Categorias } from '../../components/Categorias/Categorias';

const Gender = (ruta) => {
  return (
    <GenderContainerStyles>
      <Categorias />
      <CardsProductos genero={ruta}/>
    </GenderContainerStyles>
  )
};

export default Gender;