import React, { useEffect, useState } from 'react';
import CadrItemArticleLarge from "../../component/Card/CardItemArticleLarge";
import CadrItemArticleSmall from '../../component/Card/CardItemArticleSmall';
import CalendarWidget from '../../component/Calendar/CalendarWidget';
import { 
  ArticleLarge, 
  ArticleSmall, 
  ArticleWrapp, 
  CalendarBox,
} from "./ModuleHomeStyles";
import { article } from '../../api/article';
import { Loader } from '../../component/Loader';

export default function Home() {
  const [articleList, setArticleList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Функция для получения статей
  const fetchArticle = async () => {
    setLoading(true);
    try {
      const response = await article.get();
      // Сортировка статей по дате обновления (с самой свежей на верх)
      const sortedArticles = [...response].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
      setArticleList(sortedArticles); // Устанавливаем отсортированные статьи
    } catch (err) {
      console.log(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticle();
  }, []); // Зависимости, чтобы вызов был только один раз при монтировании компонента

  if (loading) return <Loader />; // Если данные загружаются
  if (error) return <p>{error}</p>; // Если есть ошибка

  return (
    <ArticleWrapp container spacing={2}>
      {/* Первая большая статья */}
      <ArticleLarge size={12}>
        {articleList.length > 0 ? (
          <CadrItemArticleLarge card={articleList[0]} />
        ) : (
          <p>Нет статей</p>
        )}
      </ArticleLarge>

      {/* Первая маленькая статья */}
      <ArticleSmall size={6}>
        {articleList.length > 1 ? (
          <CadrItemArticleSmall card={articleList[1]} />
        ) : (
          <p>Нет статей</p>
        )}
      </ArticleSmall>

      {/* Календарь */}
      <CalendarBox size={6}>
        <CalendarWidget />
      </CalendarBox>

      {/* Оставшиеся статьи */}
      {articleList.slice(2).map((card) => (
        <ArticleSmall key={card.id} size={6}>
          <CadrItemArticleSmall card={card} />
        </ArticleSmall>
      ))}
    </ArticleWrapp>
  );
}