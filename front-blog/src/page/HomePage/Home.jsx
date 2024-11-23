import React, { useEffect, useState } from 'react';
// import cardData from '../../component/CardData.json';


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


  const fetchArticle = async () => {
    setLoading(true);

    try {
      const response = await article.get();
      setArticleList(response);
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
    <ArticleWrapp container spacing={2}>
      {/* Первая большая статья */}
      <ArticleLarge size={12}>
        <CadrItemArticleLarge card={articleList[0]} />
      </ArticleLarge>

      {/* Первая маленькая статья */}
      <ArticleSmall size={6}>
        <CadrItemArticleSmall card={articleList[1]} />
      </ArticleSmall>

      {/* Календарь фиксирован */}
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