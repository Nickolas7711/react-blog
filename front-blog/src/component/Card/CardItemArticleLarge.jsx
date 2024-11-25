import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BoxBtnArticle, ButtonArticle, CardImages, CardInnerText, CardItemLarge, DateArticle, DescriptionsArticle, TitleArticle } from './ModuleCardItemArticleLargeStyles';


function CadrItemArticleLarge ({ card }){
  const navigate = useNavigate();

  const handleReadMore = () => {
    const params = card.id;
    navigate(`/article/${params}`);
  }

  return (
    <CardItemLarge>
      <CardImages
        component="img"
        height="194"
        src={card.image}
        alt={card.title}
      />
      <CardInnerText>
        <TitleArticle>{card.title}</TitleArticle>
        <DateArticle>Date: {card.subheader} </DateArticle>
        <DescriptionsArticle>{card.article.slice(0, 1000)} ...</DescriptionsArticle> 
        <BoxBtnArticle>
          <ButtonArticle onClick={handleReadMore}>Read More</ButtonArticle>
        </BoxBtnArticle>     
      </CardInnerText>      
    </CardItemLarge>

  )
   
}

export default CadrItemArticleLarge;