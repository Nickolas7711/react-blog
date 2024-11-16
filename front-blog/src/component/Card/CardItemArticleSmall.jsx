import React from 'react';
import { BoxBtnArticleSmall, ButtonArticleSmall, CardInnerTextSmall, CardItemSmall, DateArticleSmall, DescriptionsArticleSmall, TitleArticleSmall } from './ModuleCardItemArticleSmallStules';


function CadrItemArticleSmall ({ card }){

  return (
    <CardItemSmall>
      <CardInnerTextSmall>
        <TitleArticleSmall>{card.title}</TitleArticleSmall>
        <DateArticleSmall>Date: {card.subheader} </DateArticleSmall>
        <DescriptionsArticleSmall>{card.article}</DescriptionsArticleSmall> 
        <BoxBtnArticleSmall>
          <ButtonArticleSmall>Read More</ButtonArticleSmall>
        </BoxBtnArticleSmall>     
      </CardInnerTextSmall>      
    </CardItemSmall>
  )   
}

export default CadrItemArticleSmall;