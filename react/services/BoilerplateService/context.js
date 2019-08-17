import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';

import { initialData, getBoilerplate } from './index';

const BoilerplateContext = createContext();

export const useBoilerplate = () => {
  const context = useContext(BoilerplateContext);

  if (!context) {
    throw new Error('useBoilerplate must be used within a BoilerplateContext');
  }

  return context;
};

export const BoilerplateProvider = props => {
  const [boilerplate, setBoilerplate] = useState(initialData);

  useEffect(() => {
    let mounted = false;

    getBoilerplate().then(boilerplateData => {
      if (!mounted) {
        return;
      }

      setBoilerplate({ ...boilerplateData, hasLoaded: true });
    });

    return () => {
      mounted = false;
    };
  }, []);

  const value = useMemo(() => [boilerplate, setBoilerplate], [boilerplate]);

  return <BoilerplateContext.Provider value={value} {...props} />;
};
