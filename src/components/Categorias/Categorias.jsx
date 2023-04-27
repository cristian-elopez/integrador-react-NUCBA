import React from 'react'
import { useSelector } from 'react-redux';
import { Categoria } from './Categoria';
import { Categories } from '../../data/Categories';
import { CategoriasContainer } from './CategoriasStyles';

export const Categorias = () => {
    // const categories = useSelector(state => state.categories.categories);
  return (
    <CategoriasContainer>
        {
          Categories.map(cat => <Categoria key={cat.id} {...cat} />)
        }
    </CategoriasContainer>
  )
};
