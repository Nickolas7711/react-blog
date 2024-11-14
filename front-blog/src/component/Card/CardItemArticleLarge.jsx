import React from 'react';
import { BoxBtnArticle, ButtonArticle, CardImages, CardInnerText, CardItemLarge, DateArticle, DescriptionsArticle, TitleArticle } from './ModuleCardItemArticleLargeStyles';


function CadrItemArticleLarge ({ card }){

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
        <DescriptionsArticle>{card.article}</DescriptionsArticle> 
        <BoxBtnArticle>
          <ButtonArticle>Read More</ButtonArticle>
        </BoxBtnArticle>     
      </CardInnerText>      
    </CardItemLarge>

  )
   
}

export default CadrItemArticleLarge;