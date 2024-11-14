import cardData from '../CardData.json';
// import CardItem from "./CardItem";

import CadrItemArticleLarge from "./CardItemArticleLarge";
import { ArticleLarge, ArticleSmall, ArticleSmollBox, ArticleWrapp, CalendarBox, Item } from "./ModuleCardArticleStyles";



export default function CardArticle() {
  
  return (
    // <div style={{display: 'flex', flexDirection: 'row',flexWrap:'wrap', justifyContent: 'space-between', gap: '10px', height:'auto'}}>
    //   {cardData.map((card) => (
    //     <CardItem key={card.id} card={card} />
    //   ))}
    // </div>
    <ArticleWrapp container>
  <ArticleLarge size={12}>
    <CadrItemArticleLarge card={cardData[0]}/>
  </ArticleLarge>
  <ArticleSmall size={6}>
    <Item>ArticleSmall</Item>
  </ArticleSmall>
  <CalendarBox size={6}>
    <Item>CalendarBox</Item>
  </CalendarBox>
  <ArticleSmollBox size={12}>
     <ArticleSmall size={6}>
    <Item>ArticleSmall</Item>
  </ArticleSmall>
  </ArticleSmollBox>
</ArticleWrapp>

  );
  
}