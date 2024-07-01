import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import './index.css'


const EditorConvertToHTML = ({ editorState, onEditorStateChange }) => {
  return (
    <>
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={onEditorStateChange}
        toolbar={{
          options: ['inline', 'list', 'textAlign',],
        }}
      />
    </>
  );
}

export default EditorConvertToHTML;