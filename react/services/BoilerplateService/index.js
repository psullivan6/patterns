import { get } from 'axios';

export const initialData = {
  hasLoaded: false,
  foo: 'bar'
};

export const getBoilerplate = ({ defaultResponse = initialData } = {}) =>
  get('/api/boilerplate')
    .then(({ data }) => {
      data.newThing = 'fooBar';
      return data;
    })
    .catch(error => {
      console.log('API - ERROR:', error);

      return {
        ...defaultResponse,
        hasLoaded: true
      };
    });
