import React from 'react';
import {
    FoundContainerStyled
} from './PageNotFoundStyles';

const PageNotFound = () => {
  return (
    <FoundContainerStyled>
        <img 
            src="https://res.cloudinary.com/dja0b7qbo/image/upload/v1682452675/PROYECTOS/GENOVA/IMAGES/advertencia_htavhg.png" 
            alt="Advertencia" 
        />
        <h2>404 Error</h2>
        <p>Parece que la página que buscás no existe o fue removida</p>
    </FoundContainerStyled>
  )
}

export default PageNotFound;
