import React, { createContext, useContext } from 'react';

const BoilerplateContext = createContext();

export const useBoilerplate = () => {
  const context = useContext(BoilerplateContext);

  if (!context) {
    throw new Error('useBoilerplate must be used within a BoilerplateContext');
  }

  return context;
};

export const BoilerplateProvider = props => {
  const data = {
    foo: 'foo',
    bar: 'bar'
  };

  return <BoilerplateContext.Provider value={data} {...props} />;
};
