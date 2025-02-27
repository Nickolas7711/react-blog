import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css'; // Подключаем стили для редактора
import { article } from '../../api/article';
import { ADMIN_ROUTE } from '../../utils/constsRouter';
import { Loader } from '../../component/Loader';
import { 
  BoxInnerImgCreate, 
  BoxInnerNoImageCreate, 
  CreateBoxBtn, 
  CreateInner, 
  CreateInnerText, 
  CreateWrapp, 
  ImgCreateInner, 
  TitleArticleCreate, 
  TitleCreate 
} from './ModuleCreateArticleStyles';
import Editor from '../../component/EditorSetting/Editor';

const CreateArticle = () => {
  const navigate = useNavigate();

  const [subheader, setSubheader] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

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
      setLoading(true);
      const formData = new FormData();
      formData.append('subheader', subheader)
      formData.append('title', title);
      formData.append('article', content);
      if (imageFile) {
        formData.append('image', imageFile);
      }

      for (let pair of formData.entries()) {
        console.log(pair[0] + ": " + pair[1]);
      }

      const response = await article.post(formData);

      if (response) {
        navigate(ADMIN_ROUTE);
      } else {
        setError('Ошибка при создании статьи');
      }
    } catch (err) {
      console.log(err);
      setError('Ошибка при создании статьи');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate(ADMIN_ROUTE);
  };

  if (loading) return <Loader />;
  if (error) return <div>{error}</div>;

  return (
    <CreateWrapp>
      <CreateInner>
        <TitleCreate>Создание новой статьи</TitleCreate>
        <TitleArticleCreate>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Название статьи"
          />
          <input
    type="text"
    value={subheader}
    onChange={(e) => setSubheader(e.target.value)}
    placeholder="Подзаголовок статьи"
  />
        </TitleArticleCreate>
        <CreateInnerText>
          <Editor value={content} onChange={handleContentChange} />
        </CreateInnerText>
        <CreateBoxBtn>
          <button onClick={handleSave}>Создать статью</button>
          <button onClick={handleCancel}>Отмена</button>
        </CreateBoxBtn>
      </CreateInner>
      <ImgCreateInner>      
        {image ? (
          <BoxInnerImgCreate>
            <img src={image} alt={title} />
            <button onClick={handleRemoveImage}>Удалить фото</button>
          </BoxInnerImgCreate>
        ) : (
          <BoxInnerNoImageCreate>
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
          </BoxInnerNoImageCreate>
        )}      
      </ImgCreateInner>
    </CreateWrapp>
  );
};

export default CreateArticle;