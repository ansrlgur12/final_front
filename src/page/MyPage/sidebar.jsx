import React from 'react';
import { UserOutlined, SettingOutlined, HeartOutlined, CompassOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Sider } = Layout;

const items = [
  {
    key: 'sub1',
    icon: <UserOutlined />,
    label: '나의 페이지',
    children: [
      {
        key: 'sub1-1',
        label: '나의 프로필',
        to: '/UserInfo'
      },
      {
        key: 'sub1-2',
        label: '내가 주문한 상품',
        to: '/OrderedProduct'
      },
      {
        key: 'sub1-3',
        label: '장바구니',
        to: '/Cart'
      },
    ],
  },
  {
    key: 'sub2',
    icon: <SettingOutlined />,
    label: '나의 정보 변경',
    children: [
      {
        key: 'sub2-1',
        label: '프로필 수정',
        to: '/UserEdit'
      },
      {
        key: 'sub2-2',
        label: '비밀번호 변경',
        to: '/NewPassword'
      },
      {
        key: 'sub2-3',
        label: '회원 탈퇴',
        to: '/Delete'
      },
    ],
  },
  {
    key: 'sub3',
    icon: <HeartOutlined />,
    label: '나의 활동',
    children: [
      {
        key: 'sub3-1',
        label: '내가 쓴 댓글',
      },
      {
        key: 'sub3-2',
        label: '내가 쓴 게시글',
      },
      {
        key: 'sub3-3',
        label: '찜한 상품',
      },
    ],
  },
  {
    key: 'sub4',
    icon: <CompassOutlined />,
    label: '나의 캠핑장',
    children: [
      {
        key: 'sub4-1',
        label: '내가 등록한 캠핑장',
      },
      {
        key: 'sub4-2',
        label: '찜한 캠핑장',
      },
      {
        key: 'sub4-3',
        label: '정복한 캠핑장',
      },
    ],
  },
];

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <Sider width={200}>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%' }}
      >
        {/* 메뉴 아이템을 반복하여 렌더링 */}
        {items.map((item) => (
          <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
            {/* 서브메뉴 아이템을 반복하여 렌더링 */}
            {item.children.map((child) => (
              <Menu.Item
                key={child.key}
                onClick={() => child.to && navigate(child.to)}
              >
                {child.label}
              </Menu.Item>
            ))}
          </Menu.SubMenu>
        ))}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
