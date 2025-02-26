import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BoxBtnArticle, ButtonArticle, CardImages, CardInnerText, CardItemLarge, DateArticle, DescriptionsArticle, TitleArticle } from './ModuleCardItemArticleLargeStyles';

const removeHtmlTags = (text) => {
  return text.replace(/<[^>]*>/g, '');
};

function CadrItemArticleLarge ({ card }){
  const [sliceLength, setSliceLength] = useState(1000);

  useEffect(() => {
    const updateSliceLength = () => {
      if (window.innerWidth < 982) {
        setSliceLength(100);
      } else if (window.innerWidth < 1072) {
        setSliceLength(150);
      } else if (window.innerWidth < 1215) {
        setSliceLength(200);
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
        <DescriptionsArticle>{removeHtmlTags(card.article).slice(0, sliceLength)} ...</DescriptionsArticle> 
        <BoxBtnArticle>
          <ButtonArticle onClick={handleReadMore}>Read More</ButtonArticle>
        </BoxBtnArticle>     
      </CardInnerText>      
    </CardItemLarge>

  )
   
}

export default CadrItemArticleLarge;