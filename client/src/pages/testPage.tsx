import React, {useState} from 'react';
import { Editor } from '@tinymce/tinymce-react';

const TestPage = () => {
    const [data, setData] = useState('<p>React is really <em>nice</em>!</p>');

    const handleEditorChange = (e) => {
        setData(e.target.getContent());
        console.log('Content was updated:', e.target.getContent());
      }

    return (
        <Editor
        initialValue={data}
        init={{
          plugins: 'link image code',
          toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
        }}
        onChange={(e) => handleEditorChange(e)}
      />


    )
}

export default TestPage