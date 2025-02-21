import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css'; // Подключаем стили для React Quill
import { article } from '../../api/article';
import { ADMIN_ROUTE } from '../../utils/constsRouter';
import { Loader } from '../../component/Loader';
import { BoxInnerImg, BoxInnerNoImage, EditBoxBtn, EditInner, EditInnerText, EditWrapp, ImgEditInner, TitleArticleEdit, TitleEdit } from './ModuleEditArticleStyles';
import Editor from '../../component/EditorSetting/Editor';


const EditArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [subheader, setSubheader] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      try {
        const response = await article.getById(id);
        setSubheader(response.subheader);
        setTitle(response.title);
        setContent(response.article);
        setImage(response.image); // Загружаем текущее изображение
      } catch (err) {
        console.log(err);
        setError('Ошибка загрузки статьи');
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageFile(file);
      setImage(URL.createObjectURL(file)); // Отображаем превью изображения
    }
  };

  const handleRemoveImage = () => {
    setImage('');
    setImageFile(null);
  };

  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append('subheader', subheader);
      formData.append('title', title);
      formData.append('article', content);

      if (imageFile) {
        formData.append('image', imageFile); // Если выбрано новое изображение
      } else {
        formData.append('image', image); // Используем старое изображение
      }

      const response = await article.update(id, formData);

      if (response) {
        navigate(ADMIN_ROUTE);
      } else {
        setError('Ошибка при сохранении статьи');
      }
    } catch (err) {
      console.log(err);
      setError('Ошибка при сохранении статьи');
    }
  };

  const handleCancel = () => {
    navigate(ADMIN_ROUTE);
  };

  if (loading) return <Loader />;
  if (error) return <div>{error}</div>;

  return (
    <EditWrapp>
      <EditInner>
      <TitleEdit>Основная информация</TitleEdit>
      <TitleArticleEdit>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Название статьи"
        />
      </TitleArticleEdit>
      <EditInnerText>
        <Editor value={content} onChange={handleContentChange} />
      </EditInnerText>
      <EditBoxBtn>
      <button onClick={handleSave}>Сохранить статью</button>
      <button onClick={handleCancel}>Отмена сохранения</button>
      </EditBoxBtn>
      </EditInner>
      <ImgEditInner>      
        {image ? (
          <BoxInnerImg>
            <img src={image} alt={title} />
            <button onClick={handleRemoveImage}>Удалить фото</button>
          </BoxInnerImg>
        ) : (
          <BoxInnerNoImage>
  <img src="/images/no-img.jpeg" alt="No-image" />
  <input 
    type="file" 
    accept="image/*" 
    onChange={handleFileChange} 
    id="fileInput" 
    style={{ display: 'none' }} 
  />
  <button onClick={() => document.getElementById('fileInput').click()}>
    Добавить фото
  </button>
</BoxInnerNoImage>
        )}      
      </ImgEditInner>
    </EditWrapp>
  );
};

export default EditArticle;