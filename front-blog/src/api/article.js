import axios from './servise';

const article = {
  get: () => axios.get('/article')
  .then(({ data }) => data)
  .catch((err) => {
    throw new Error(err);
  }),
  post: (params) => axios.post('/article', params)
  .then(({ data }) => data)
  .catch((err) => {
    throw new Error(err);
  }),
};

export { article };