import React, { useEffect, useState } from 'react';
import { Loader } from '../../component/Loader';
import { useParams } from 'react-router-dom';
import { article } from '../../api/article';
import { ArticleBlogWrrap, ArticleBox, BoxTitleImages, ImagesBox, SubheaderBox, TitleBox, TitleInnerBox } from './ModuleArticleBlogStyles';

export default function ArticleBlog() {
  const { id } = useParams();
  const [articleData, setArticleData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Функция для поиска статьи по заголовку
    const fetchArticle = async () => {
      setLoading(true);
      try {
        // Здесь вы получаете все статьи из API
        const response = await article.get(); // Получаем все статьи
        const foundArticle = response.find((art) => art.id === id); // Ищем статью по id

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

  // Если данные еще загружаются
  if (loading) return <Loader />;

  // Если произошла ошибка
  if (error) return <p>{error}</p>;

  return (    
    <ArticleBlogWrrap>
      <BoxTitleImages>
        <ImagesBox
          src={articleData.image}
          alt={articleData.title}
        />
        <TitleInnerBox>
          <TitleBox>{articleData.title}</TitleBox>
          <SubheaderBox>Data: {articleData.subheader}</SubheaderBox>
        </TitleInnerBox>
      </BoxTitleImages>
          <ArticleBox>{articleData.article}</ArticleBox>
        </ArticleBlogWrrap>
  ) 
}



