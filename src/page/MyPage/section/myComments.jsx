import React, { useState } from 'react';
import { Popconfirm, Table } from 'antd';
import styled from 'styled-components';
import Header from '../../../main/header';
import Sidebar from '../sidebar';

const LayoutContainer = styled.div`
  display: flex;
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const MyComments = () => {
  const [dataSource, setDataSource] = useState([
    {
      key: '0',
      boardNumber: '1',
      boardName: '게시판 1',
      content: '내용 1',
      date: '2023-06-01',
      userId: 'user1',
    },
    {
      key: '1',
      boardNumber: '2',
      boardName: '게시판 2',
      content: '내용 2',
      date: '2023-06-02',
      userId: 'user2',
    },
  ]);

  const handleDelete = (key) => { //특정 댓글 삭제함수
    setDataSource((prevDataSource) => prevDataSource.filter((item) => item.key !== key));
  };

  const columns = [
    {
      title: '게시판번호',
      dataIndex: 'boardNumber',
    },
    {
      title: '게시판명',
      dataIndex: 'boardName',
    },
    {
      title: '내용',
      dataIndex: 'content',
    },
    {
      title: '날짜',
      dataIndex: 'date',
    },
    {
      title: '아이디',
      dataIndex: 'userId',
    },
    {
      title: '상태',
      dataIndex: 'operation',
      render: (_, record) => //
        dataSource.length >= 1 ? (
          <Popconfirm title="정말 삭제하시겠습니까?" onConfirm={() => handleDelete(record.key)}>
            <a>삭제하기</a>
          </Popconfirm>
        ) : null,
    },
  ];

  return (
    <>
      <Header />
      <LayoutContainer>
        <Sidebar />
        <ContentContainer>
          <Table dataSource={dataSource} columns={columns} />
        </ContentContainer>
      </LayoutContainer>
    </>
  );
};

export default MyComments;
