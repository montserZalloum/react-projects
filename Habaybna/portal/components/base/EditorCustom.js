import React, { Component } from "react";
import { render } from "react-dom";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

class TinyMceEditor extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    console.log(e.target.getContent());
  }

  render() {
    return (
      <div
        className="ckeditor-wrapper"
      >
        
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor 5!</p>"
          config={{
            toolbar: [
              "heading",
              "|",
              "bold",
              "italic",
              "link",
              "bulletedList",
              "numberedList",
              "blockQuote",
              "ckfinder",
              "|",
              "imageTextAlternative",
              "imageUpload",
              "imageStyle:full",
              "imageStyle:side",
              "|",
              "mediaEmbed",
              "insertTable",
              "tableColumn",
              "tableRow",
              "mergeTableCells",
              "|",
              "undo",
              "redo"
            ]
          }}
          onInit={editor => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
            console.log(
              "toolbar: ",
              Array.from(editor.ui.componentFactory.names())
            );
            console.log(
              "plugins: ",
              ClassicEditor.builtinPlugins.map(plugin => plugin.pluginName)
            );
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={editor => {
            console.log("Blur.", editor);
          }}
          onFocus={editor => {
            console.log("Focus.", editor);
          }}
        />
      </div>
    );
  }
}


export default TinyMceEditor;