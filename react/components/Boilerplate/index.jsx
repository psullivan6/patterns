import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// Styles
import { Container } from './styles';

const Boilerplate = ({ children }) => {
  useEffect(() => {
    console.log('Boilerplate - mounted');
  }, []);

  return (
    <Container>
      <h1>Boilerplate Component</h1>
      {children}
    </Container>
  );
};

Boilerplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

Boilerplate.defaultProps = {
  children: null
};

export default Boilerplate;
