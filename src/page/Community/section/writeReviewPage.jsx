import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Button, Modal, Layout } from 'antd';
import ReviewApi from '../../../API/ReviewAPI';
import Header from '../../../main/header';

const {Content} = Layout;

const WriteReviewPage = () => {
  const [data, setData] = useState('');
  const [error, setError] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSubmit = async () => {
    try {
      const id = 1;
      const memberId = 1;
      const title = 'Review Title';
      const content = data;
      const date = new Date().toISOString(); 
      const postType = '1';
      await ReviewApi.createReview(id, memberId, title, content, date, postType);
      setModalVisible(true);
    } catch (error) {
      console.log(error);
      setError('리뷰 작성에 실패하였습니다.');
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <Layout>
        <Header />
      <Content style={{ padding: '50px' }}>
        <div className="App">
          <h2>Using CKEditor 5 with React</h2>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <CKEditor
            editor={ClassicEditor}
            data="<p>Hello from CKEditor 5!</p>"
            config={{
              toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote'],
              ckfinder: {
                uploadUrl: 'https://example.com/upload', // Replace with your upload URL
              },
            }}
            onReady={(editor) => {
              console.log('Editor is ready to use!', editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
              setData(data);
            }}
          />
          <Button onClick={handleSubmit}>작성하기</Button>

          <Modal visible={modalVisible} onCancel={closeModal} onOk={closeModal}>
            <h3>작성 완료</h3>
            <p>글이 성공적으로 작성되었습니다.</p>
          </Modal>
        </div>
      </Content>

    </Layout>
  );
};

export default WriteReviewPage;
