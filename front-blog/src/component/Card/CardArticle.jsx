import cardData from '../CardData.json';

import CadrItemArticleLarge from "./CardItemArticleLarge";
import CadrItemArticleSmall from './CardItemArticleSmall';
import CalendarWidget from '../Calendar/CalendarWidget'
import { 
  ArticleLarge, 
  ArticleSmall, 
  ArticleSmollBox, 
  ArticleWrapp, 
  CalendarBox,
} from "./ModuleCardArticleStyles";



export default function CardArticle() {
  
  return (
     //   {cardData.map((card) => (
    //     <CardItem key={card.id} card={card} />
    //   ))}
    
    <ArticleWrapp container spacing={2}>
  <ArticleLarge size={12}>
    <CadrItemArticleLarge card={cardData[0]}/>
  </ArticleLarge>
  <ArticleSmall size={6}>
    <CadrItemArticleSmall card={cardData[1]} />
  </ArticleSmall>
  <CalendarBox size={6}>
    <CalendarWidget />
  </CalendarBox>
  <ArticleSmollBox size={12}>
     <ArticleSmall size={6}>
     <CadrItemArticleSmall card={cardData[2]} />
  </ArticleSmall>
  </ArticleSmollBox>
</ArticleWrapp>
  );  
}