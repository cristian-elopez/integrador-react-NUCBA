import React from 'react';
import { useDispatch } from 'react-redux';
import { formatPrice } from '../../utils/formatPrice';
import * as cartActions from '../../redux/cart/cart-actions';
import { 
    InfoPrenda,
    AiOutlineMinusStyled,
    AiOutlinePlusStyled,
    ImageContainer
} from './CardProductStyles';

const CardProduct = ({ img, tittle, desc, price, quantity, id }) => {
    const dispatch = useDispatch()
    return (
        <InfoPrenda>
            <ImageContainer>
                <img src={img} alt={tittle} />
                <p>{tittle}</p>
            </ImageContainer>
            <p>{formatPrice(price)}</p>
            <div>
                <AiOutlineMinusStyled 
                    onClick={()=> dispatch(cartActions.removeFromCart(id))}
                />
                <p>{quantity}</p>
                <AiOutlinePlusStyled 
                    onClick={()=> dispatch(cartActions.addToCart({ img, tittle, desc, price, quantity, id }))}
                />
            </div>
            <p>{formatPrice(price * quantity)}</p>
        </InfoPrenda>
  )
}

export default CardProduct




