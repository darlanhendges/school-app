import React from 'react';

import NameContextProvider from './name';
import StepsContextProvider from './steps';

const Provider = ({ children }) => {
  return (
    <NameContextProvider>
      <StepsContextProvider>{children}</StepsContextProvider>
    </NameContextProvider>
  );
};

export default Provider;
