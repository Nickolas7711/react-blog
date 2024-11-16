import cardData from '../CardData.json';

import CadrItemArticleLarge from "./CardItemArticleLarge";
import CadrItemArticleSmall from './CardItemArticleSmall';
import CalendarWidget from '../Calendar/CalendarWidget';
import { 
  ArticleLarge, 
  ArticleSmall, 
  ArticleWrapp, 
  CalendarBox,
} from "./ModuleCardArticleStyles";

export default function CardArticle() {
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