import React from 'react';
import { CardImages, CardInnerText, CardItemLarge, DateArticle, DescriptionsArticle, TitleArticle } from './ModuleCardItemArticleLargeStyles';


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
        <DescriptionsArticle>Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</DescriptionsArticle>
      </CardInnerText>
      
    </CardItemLarge>

  )
   
}

export default CadrItemArticleLarge;