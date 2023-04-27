import React from 'react';

import { 
    LoaderContainer, 
    LoaderStyled 
} from './LoaderStyles';

const Loader = ({ styles }) => {
  return (
    <LoaderContainer>
      <LoaderStyled args={styles} style={{ rotate }} />
    </LoaderContainer>
  );
};

export default Loader;