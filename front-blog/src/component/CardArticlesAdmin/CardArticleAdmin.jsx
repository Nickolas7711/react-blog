import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BoxBtnArticleCardAdmin, 
  ButtonArticleCardAdmin, 
  CardImagesAdmin, 
  CardInnerTextCardAdmin, 
  DateArticleCardAdmin, 
  DescriptionsArticleCardAdmin, 
  TitleArticleCardAdmin 
} from './ModuleCardArticleAdminStyles';
import ModalDelArticle from '../ModalDeleteArticles/ModalDelArticle';
import { article } from '../../api/article';

const removeHtmlTags = (text) => {
  return text.replace(/<[^>]*>/g, '');
};


function CardArticleAdmin({ card, updateArticle }) {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Функция для редиректа на страницу редактирования статьи
  const handleEdit = () => {
    navigate(`/admin/edit/${card.id}`);
  };

  // Функция удаления статьи
  const handleDelete = async ()=> {
    setLoading(true);
    try {
      const response = await article.delete(card.id);
      if (response) {
        updateArticle(card.id);
      } else {
        setError('Ошибка при удалении статьи!');
      }
    } catch (err) {
      setError('Ошибка при удалении статьи!');
    } finally {
      setLoading(false);
      setShowModal(false);
    }
  };

  const handleCanselDelete = () => {
    setShowModal(false);
  }

  return (
    <>
      <CardImagesAdmin
        component="img"
        height="194"
        src={card.image}
        alt={card.title}
      />
      <CardInnerTextCardAdmin>
        <TitleArticleCardAdmin onClick={handleEdit}>{card.title}</TitleArticleCardAdmin>
        <DateArticleCardAdmin>Date: {card.subheader}</DateArticleCardAdmin>
        <DescriptionsArticleCardAdmin>{removeHtmlTags(card.article).slice(0, 150)} ...</DescriptionsArticleCardAdmin>
      </CardInnerTextCardAdmin>
      <BoxBtnArticleCardAdmin>
        <ButtonArticleCardAdmin onClick={handleEdit}>Редактировать</ButtonArticleCardAdmin>
        <ButtonArticleCardAdmin onClick={() => setShowModal(true)}>Удалить</ButtonArticleCardAdmin>
      </BoxBtnArticleCardAdmin>
      {showModal && card && (
      <ModalDelArticle
        card={card}
        showModal={showModal}
        onClose={handleCanselDelete}
        onConfirm={handleDelete}
        loading={loading}
        error={error}
      />
      )}

    </>
  );
}

export default CardArticleAdmin;