import React, { useEffect, useState } from 'react';
import { article } from '../../api/article';
import { Loader } from '../../component/Loader';
import { ArticleAdminWrapp } from './ModuleArticlesListAdminStyles';
import CardArticleAdmin from '../../component/CardArticlesAdmin/CardArticleAdmin';

export default function ArticlesListAdmin() {
  const [articlesList, setArticlesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Функция для получения списка статей
  const fetchArticle = async () => {
    setLoading(true);
    try {
      const response = await article.get();
      // Сортируем статьи по дате обновления (новые на верх)
      const sortedArticles = [...response].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
      setArticlesList(sortedArticles); // Обновляем список статей
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticle();
  }, []);

  // Функция для редактирования статьи
  const updateArticle = (id, updatedData) => {
    setArticlesList(prevArticles => 
      prevArticles.map(article =>
        article.id === id ? { ...article, ...updatedData } : article
      )
    );
  };

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;

  return (
    <>
      {articlesList.map((card) => (
        <ArticleAdminWrapp key={card.id}>
          <CardArticleAdmin 
            card={card} 
            updateArticle={updateArticle} // Передаем функцию обновления
          />
        </ArticleAdminWrapp>
      ))}
    </>
  );
}
