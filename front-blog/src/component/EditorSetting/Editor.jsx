import React, { useRef, useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { EditorContainer, ToggleButton } from './ModuleEditorSettingStyles';

const Font = Quill.import('formats/font');
Font.whitelist = ['Sans-Serif', 'Roboto', 'Roboto-Mono', 'Monomakh', 'Shafarik', 'Oswald', 'Raleway'];
Quill.register(Font, true);

const modules = {
  toolbar: [
    [{ 'font': Font.whitelist }],
    [{ header: [false, 2, 3, 4, 5] }],
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

const Editor = forwardRef(({ value, onChange }, ref) => {
  const quillRef = useRef(null);
  const [isHtmlMode, setHtmlMode] = useState(false);
  const [htmlContent, setHtmlContent] = useState(value);

  useImperativeHandle(ref, () => ({
    getText: () => quillRef.current?.getEditor().getText(),
    getHTML: () => quillRef.current?.getEditor().root.innerHTML,
  }));

  useEffect(() => {
    if (isHtmlMode) {
      setHtmlContent(value);
    }
  }, [isHtmlMode, value]);

  return (
    <EditorContainer>
      {isHtmlMode ? (
        <textarea
          value={htmlContent}
          onChange={(e) => {
            setHtmlContent(e.target.value);
            onChange(e.target.value);
          }}
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
      <ToggleButton onClick={() => setHtmlMode(!isHtmlMode)}>
        {isHtmlMode ? 'Обычный текст' : 'Редактировать HTML'}
      </ToggleButton>
    </EditorContainer>
  );
});

export default Editor;