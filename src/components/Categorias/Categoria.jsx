import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as categoriesActions from '../../redux/categories/categories-actions';
import { 
  CardCategoria,
  CardImg,
  CardText 
} from './CategoriasStyles';

export const Categoria = ({ id, img, tittle, category }) => { 
  const selectedCategory = useSelector(state => state.categories.selectedCategory);
  const dispatch = useDispatch();
  return (
    <CardCategoria
      selected={category === selectedCategory}
      onClick={ ()=> dispatch(categoriesActions.selectCategory(category)) }>
      <CardImg 
        src={img}
        alt={tittle}
      />
      <CardText>
        <h3>{tittle}</h3>
      </CardText>
    </CardCategoria>
  )
}