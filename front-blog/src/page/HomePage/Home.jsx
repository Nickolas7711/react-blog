import React from 'react';
import cardData from '../../component/CardData.json';

import CadrItemArticleLarge from "../../component/Card/CardItemArticleLarge";
import CadrItemArticleSmall from '../../component/Card/CardItemArticleSmall';
import CalendarWidget from '../../component/Calendar/CalendarWidget';
import { 
  ArticleLarge, 
  ArticleSmall, 
  ArticleWrapp, 
  CalendarBox,
} from "./ModuleHomeStyles";

export default function Home() {
  return (
    <ArticleWrapp container spacing={2}>
      {/* Первая большая статья */}
      <ArticleLarge size={12}>
        <CadrItemArticleLarge card={cardData[0]} />
      </ArticleLarge>

      {/* Первая маленькая статья */}
      <ArticleSmall size={6}>
        <CadrItemArticleSmall card={cardData[1]} />
      </ArticleSmall>

      {/* Календарь фиксирован */}
      <CalendarBox size={6}>
        <CalendarWidget />
      </CalendarBox>

      {/* Оставшиеся статьи */}
      {cardData.slice(2).map((card) => (
        <ArticleSmall key={card.id} size={6}>
          <CadrItemArticleSmall card={card} />
        </ArticleSmall>
      ))}
    </ArticleWrapp>
  );
}