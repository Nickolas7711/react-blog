import axios from './servise';

const article = {
  // Получение списка всех статей
  get: () => axios.get('/articles')
    .then(({ data }) => data)
    .catch((err) => {
      console.error('Ошибка при получении списка статей:', err.response || err.message);
      throw new Error('Ошибка при получении списка статей');
    }),

  // Создание новой статьи
  post: (params) => axios.post('/articles', params)
    .then(({ data }) => data)
    .catch((err) => {
      console.error('Ошибка при создании статьи:', err.response || err.message);
      throw new Error('Ошибка при создании статьи');
    }),

  // Получение статьи по ID
  getById: (id) => axios.get(`/articles/${id}`)
    .then(({ data }) => {
      if (!data) {
        throw new Error('Статья не найдена');
      }
      return data;
    })
    .catch((err) => {
      console.error(`Ошибка при получении статьи с ID ${id}:`, err.response || err.message);
      throw new Error('Ошибка при получении статьи');
    }),

  // Обновление статьи по ID
  update: (id, params) => axios.put(`/articles/${id}`, params)
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      }
      throw new Error('Ошибка при обновлении статьи');
    })
    .catch((err) => {
      console.error(`Ошибка при обновлении статьи с ID ${id}:`, err.response || err.message);
      throw new Error('Ошибка при обновлении статьи');
    }),

  // Удаление статьи по ID
  delete: (id) => axios.delete(`/articles/${id}`)
    .then(({ data }) => data)
    .catch((err) => {
      console.error(`Ошибка при удалении статьи с ID ${id}:`, err.response || err.message);
      throw new Error('Ошибка при удалении статьи');
    }),
};

export { article };
