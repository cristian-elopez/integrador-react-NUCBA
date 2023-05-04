import React from 'react';
import { formatPrice } from '../../utils/formatPrice';
import { InfoPrenda } from './CardProductStyles';

const CardProduct = ({img,tittle,price}) => {
    return (
        <InfoPrenda>
            <div>
            <img src={img} alt={tittle} />
            <p>{tittle}</p>
            </div>
            <p>{formatPrice(price)}</p>
            <p>1</p>
            <p>{formatPrice(price)}</p>
        </InfoPrenda>
  )
}

export default CardProduct




