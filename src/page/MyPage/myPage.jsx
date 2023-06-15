import React from 'react';
import { Layout } from 'antd';
import Sidebar from './sidebar';
import Header from '../../main/header';

const { Content } = Layout;

function MyPage() {
  return (
    <>

      <Header />


      <Layout>

     
        <Sidebar />

      </Layout>
    </>
  );
}

export default MyPage;
