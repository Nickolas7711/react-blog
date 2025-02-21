import React from 'react';
import { Loader } from '../Loader';
import { Modal, ModalOverlay, TitleModal, BoxBtnModal } from './ModuleModalDelStyles';


export default function ModalDelArticle({ showModal, onClose, onConfirm, loading, error }) {

  if (!showModal) return null;
  if (loading) return <Loader />;
        if (error) return <p>{error}</p>;

  return (
    <ModalOverlay>
      <Modal>
        <TitleModal>Вы уверены, что хотите удалить статью?</TitleModal>
        <BoxBtnModal>
          <button onClick={onConfirm}>Удалить</button>
          <button onClick={onClose}>Отмена</button>
        </BoxBtnModal>
        
      </Modal>
    </ModalOverlay>
  )

}