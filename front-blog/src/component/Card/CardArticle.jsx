import cardData from '../CardData.json';
import CardItem from "./CardItem";



export default function CardArticle() {
  
  return (
    <div style={{display: 'flex', flexDirection: 'row',flexWrap:'wrap', gap: '20px', height:'auto'}}>
      {cardData.map((card) => (
        <CardItem key={card.id} card={card} />
      ))}
    </div>
  );
  
}