import React from 'react';
import { BoxBtnArticleCardAdmin, ButtonArticleCardAdmin, CardImagesAdmin, CardInnerTextCardAdmin, DateArticleCardAdmin, DescriptionsArticleCardAdmin, TitleArticleCardAdmin } from './ModuleCardArticleAdminStyles';



function CardArticleAdmin ({ card }){
  return (
    <>
      <CardImagesAdmin
        component="img"
        height="194"
        src={card.image}
        alt={card.title}
      />
      <CardInnerTextCardAdmin>
        <TitleArticleCardAdmin>{card.title}</TitleArticleCardAdmin>
        <DateArticleCardAdmin>Date: {card.subheader} </DateArticleCardAdmin>
        <DescriptionsArticleCardAdmin>{card.article.slice(0, 150)} ...</DescriptionsArticleCardAdmin> 
      </CardInnerTextCardAdmin>      
        <BoxBtnArticleCardAdmin>
          <ButtonArticleCardAdmin>Edit</ButtonArticleCardAdmin>
        </BoxBtnArticleCardAdmin>     
    </>

  )
   
}

export default CardArticleAdmin;