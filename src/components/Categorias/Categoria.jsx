import React from 'react';
import { 
  CardCategoria,
  CardImg,
  CardText 
} from './CategoriasStyles';

export const Categoria = ({ id, img, tittle, category }) => {
  return (
    <CardCategoria>
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