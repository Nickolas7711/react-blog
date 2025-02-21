import React, { useRef, useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { EditorContainer, ToggleButton } from './ModuleEditorSettingStyles';



const Font = Quill.import('formats/font');
Font.whitelist = ['Sans-Serif', 'Roboto', 'Roboto-Mono', 'Monomakh', 'Shafarik', 'Oswald', 'Raleway'];
Quill.register(Font, true);

// Настройки модуля Quill
const modules = {
  toolbar: [
    [{ 'font': ['Sans-Serif', 'Roboto', 'Roboto-Mono', 'Monomakh', 'Shafarik', 'Oswald', 'Raleway'] }],
    [{ header: [ false, 2, 3, 4, 5 ] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
    ['link', 'image', 'video'],
    ['clean', 'code-block'],
  ],
};

const formats = [
  'font', 'header',
  'bold', 'italic', 'underline', 'strike',
  'list', 'bullet', 'align',
  'color', 'background',
  'link', 'image', 'video',
  'clean', 'code-block',
];

const Editor = ({ value, onChange }) => {
  const quillRef = useRef(null);
  const [isHtmlMode, setHtmlMode] = useState(false);

  const toggleHtmlMode = () => {
    setHtmlMode((prev) => !prev);
  };

  return (
    <EditorContainer>
      {isHtmlMode ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{ width: '100%', height: '300px', fontFamily: 'monospace' }}
        />
      ) : (
        <ReactQuill
          ref={quillRef}
          value={value}
          onChange={onChange}
          modules={modules}
          formats={formats}
          theme="snow"
        />
      )}
      <ToggleButton onClick={toggleHtmlMode}>
        {isHtmlMode ? 'Обычный текст' : 'Редактировать HTML'}
      </ToggleButton>
    </EditorContainer>
  );
};

export default Editor;