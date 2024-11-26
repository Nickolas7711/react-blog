import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { BoxBtnArticleSmall, ButtonArticleSmall, CardImagesSmall, CardInnerTextSmall, CardItemSmall, DateArticleSmall, DescriptionsArticleSmall, TitleArticleSmall } from './ModuleCardItemArticleSmallStules';


function CadrItemArticleSmall ({ card }){
  const [sliceLength, setSliceLength] = useState(1000);

  useEffect(() => {
    const updateSliceLength = () => {
      if (window.innerWidth < 470) {
        setSliceLength(100);
      } else if (window.innerWidth < 1024) {
        setSliceLength(500);
      } else {
        setSliceLength(1000);
      }
    };
  
    updateSliceLength();

    window.addEventListener('resize', updateSliceLength);

    return () => window.removeEventListener('resize', updateSliceLength);
  }, []);


  const navigate = useNavigate();

  const handleReadMore = () => {
    const params = card.id;
    navigate(`/article/${params}`);
  }
  return (
    <CardItemSmall>
      <CardImagesSmall
        component="img"
        height="194"
        src={card.image}
        alt={card.title}
      />
      <CardInnerTextSmall>
        <TitleArticleSmall>{card.title}</TitleArticleSmall>
        <DateArticleSmall>Date: {card.subheader} </DateArticleSmall>
        <DescriptionsArticleSmall>{card.article.slice(0, sliceLength)} ...</DescriptionsArticleSmall> 
        <BoxBtnArticleSmall>
          <ButtonArticleSmall onClick={handleReadMore}>Read More</ButtonArticleSmall>
        </BoxBtnArticleSmall>     
      </CardInnerTextSmall>      
    </CardItemSmall>
  )   
}

export default CadrItemArticleSmall;