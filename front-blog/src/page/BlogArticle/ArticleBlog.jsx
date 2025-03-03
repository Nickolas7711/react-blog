import React, { useEffect, useState } from 'react';
import { Loader } from '../../component/Loader';
import { useParams } from 'react-router-dom';
import { article } from '../../api/article';
import { ArticleBlogWrrap, ArticleBox, BoxTitleImages, ImagesBox, SubheaderBox, TitleBox, TitleInnerBox } from './ModuleArticleBlogStyles';

const removeHtmlTags = (text) => {
  return text.replace(/<[^>]*>/g, '');  
};

export default function ArticleBlog() {
  const { id } = useParams();
  const [articleData, setArticleData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      try {
        const response = await article.get(); // Получаем все статьи
        const foundArticle = response.find((art) => art.id === Number(id)); // Ищем статью по id
        
        if (foundArticle) {
          setArticleData(foundArticle);
        } else {
          setError('Статья не найдена');
        }
      } catch (err) {
        setError('Ошибка загрузки статьи');
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]); // Перезапускать загрузку при изменении id

  // Убедитесь, что articleData не null, прежде чем форматировать дату
  const formattedDate = articleData ? new Date(articleData.updatedAt).toLocaleString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }) : '';

  // Если данные еще загружаются
  if (loading) return <Loader />;

  // Если произошла ошибка
  if (error) return <p>{error}</p>;

  return (    
    <ArticleBlogWrrap>
      {articleData ? (
        <>
          <BoxTitleImages>
            <ImagesBox
              src={`http://localhost:5000/images/articles/${articleData.image}`}
              alt={articleData.title}
            />
            <TitleInnerBox>
              <TitleBox>{articleData.title}</TitleBox>
              <SubheaderBox>Data: {formattedDate}</SubheaderBox>
            </TitleInnerBox>
          </BoxTitleImages>
          <ArticleBox>{removeHtmlTags(articleData.article)}</ArticleBox>
        </>
      ) : (
        <p>Статья не найдена или загружается...</p>
      )}
    </ArticleBlogWrrap>
  );
}



