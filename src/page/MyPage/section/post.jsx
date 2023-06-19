// import React from 'react';
// import { Avatar, List, Space } from 'antd';
// import { LikeOutlined, MessageOutlined } from '@ant-design/icons';
// import Header from '../../../main/header';

// const baseObject = { //게시판 내용
//     avatar: '../../../images/profile.png',
//     description: '연곡해변솔향기캠핑장',
//     content: '한줄평',
//   };
  

// const DATA = []; //페이지
// for (let i = 0; i < 5; i++) {
//   DATA.push({
//     ...baseObject,
//     title: `잊지못할 추억입니다. ${i}`,
//   });
// }

// const IconText = ({ icon, text }) => ( //아이콘
//   <Space>
//     {React.createElement(icon)}
//     {text}
//   </Space>
// );

// const ItemRenderer = (item) => ( 
//   <List.Item
//     key={item.title}
//     actions={[
//       <IconText icon={LikeOutlined} text="10" key="list-vertical-like-o" />,
//       <IconText icon={MessageOutlined} text="1" key="list-vertical-message" />,
//     ]}
//     extra={<img width={272} alt="logo" src="/images/camping.png"/>}
//   >
//     <List.Item.Meta
//       avatar={<Avatar src={item.avatar} />}
//       title={item.title}
//       description={item.description}
//     />
//     {item.content}
//   </List.Item>
// );

// const Post = () => {
//   return (
//     <>
//     <Header/>
//     <List
//       itemLayout="vertical"
//       size="large"
//       pagination={{
//         onChange: (page) => {
//           console.log(page);
//         },
//         pageSize: 3,
//       }}
//       dataSource={DATA}
//       renderItem={ItemRenderer}
//     />
//     </>
//   );
// };

// export default Post;
