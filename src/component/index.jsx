import React, { Fragment, useState } from "react";
import EditorConvertToHTML from "./editor";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "./index.css";

const EditorViewer = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [resultText, setResultText] = useState("");

  const handleSubmit = () => {
    const text = convertToRaw(editorState.getCurrentContent());
    const payload =
      text?.blocks[0] && text.blocks[0].text === "" ? "" : draftToHtml(text);
    setResultText(payload);
    console.dir(payload);
  };

  return (
    <div style={{ padding: "30px" }}>
      <EditorConvertToHTML
        editorState={editorState}
        onEditorStateChange={(event) => setEditorState(event)}
      />
      <button className="submit_button" onClick={() => handleSubmit()}>
        Submit
      </button>

      <div style={{ marginTop: "20px" }}>
        {resultText && (
          <div>
            <b>Prepared html : </b>
            {resultText}
          </div>
        )}
      </div>
    </div>
  );
};

export default EditorViewer;
