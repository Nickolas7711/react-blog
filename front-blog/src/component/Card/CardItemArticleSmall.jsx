import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BoxBtnArticleSmall, ButtonArticleSmall, CardImagesSmall, CardInnerTextSmall, CardItemSmall, DateArticleSmall, DescriptionsArticleSmall, TitleArticleSmall } from './ModuleCardItemArticleSmallStules';

const removeHtmlTags = (text) => {
  return text.replace(/<[^>]*>/g, '');
};

function CadrItemArticleSmall ({ card }){
  const [sliceLength, setSliceLength] = useState(1000);

  useEffect(() => {
    const updateSliceLength = () => {
      if (window.innerWidth < 825) {
        setSliceLength(80);
      } else if (window.innerWidth < 925) {
        setSliceLength(100);
      } else if (window.innerWidth < 1075) {
        setSliceLength(150);
      } else if (window.innerWidth < 1180) {
        setSliceLength(200);
      } else {
        setSliceLength(1000);
      }
    };
  
    updateSliceLength();

    window.addEventListener('resize', updateSliceLength);

    return () => window.removeEventListener('resize', updateSliceLength);
  }, []);

  const formattedDate = new Date(card.updatedAt).toLocaleString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
    // hour: '2-digit',
    // minute: '2-digit'
  });

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
        <DateArticleSmall>Date: {formattedDate} </DateArticleSmall>
        <DescriptionsArticleSmall>{removeHtmlTags(card.article).slice(0, sliceLength)} ...</DescriptionsArticleSmall> 
        <BoxBtnArticleSmall>
          <ButtonArticleSmall onClick={handleReadMore}>Read More</ButtonArticleSmall>
        </BoxBtnArticleSmall>     
      </CardInnerTextSmall>      
    </CardItemSmall>
  )   
}

export default CadrItemArticleSmall;