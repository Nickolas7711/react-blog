import React, { useEffect, useState } from 'react';
import { article } from '../../api/article';
import { Loader } from '../Loader';
import { ArticleAdminWrapp } from './ModuleArticlesListAdminStyles';
import CardArticleAdmin from '../CardArticlesAdmin/CardArticleAdmin';


export default function ArticlesListAdmin() {
  const [articlesList, setArticlesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchArticle = async () => {
    setLoading(true);

    try {
      const response = await article.get();
      setArticlesList(response);
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticle()
  }, []);

  if (loading) return <Loader />
  if (error) return <p>{error}</p>

  return (
    <>
    {articlesList.map((card) => (
      <ArticleAdminWrapp key={card.id}>
        <CardArticleAdmin card={card}/>
      </ArticleAdminWrapp>

    ))}
    </>
  );
};
