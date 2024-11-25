import React from 'react';
import { useNavigate } from 'react-router-dom';

import { BoxBtnArticleSmall, ButtonArticleSmall, CardInnerTextSmall, CardItemSmall, DateArticleSmall, DescriptionsArticleSmall, TitleArticleSmall } from './ModuleCardItemArticleSmallStules';


function CadrItemArticleSmall ({ card }){
  const navigate = useNavigate();

  const handleReadMore = () => {
    const params = card.id;
    navigate(`/article/${params}`);
  }
  return (
    <CardItemSmall>
      <CardInnerTextSmall>
        <TitleArticleSmall>{card.title}</TitleArticleSmall>
        <DateArticleSmall>Date: {card.subheader} </DateArticleSmall>
        <DescriptionsArticleSmall>{card.article.slice(0, 1000)} ...</DescriptionsArticleSmall> 
        <BoxBtnArticleSmall>
          <ButtonArticleSmall onClick={handleReadMore}>Read More</ButtonArticleSmall>
        </BoxBtnArticleSmall>     
      </CardInnerTextSmall>      
    </CardItemSmall>
  )   
}

export default CadrItemArticleSmall;