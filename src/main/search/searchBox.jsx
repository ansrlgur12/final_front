import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const StyledButton = styled(Button)`
  background-color: #FFFFFF;
  border-color: #2E2E2E;
  border-radius: 5px;
  
  &:hover {
    background-color: #2D6247;
    border-color: #2E2E2E;

    .anticon {
      svg {
        fill: #FFFFFF;
      }  
    }
  }
`;

const SearchBox = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(`/search`);
  };

  return (
    <StyledButton
      onClick={onClickHandler}
      icon={<SearchOutlined />}
      size=""
    />
  );
};

export default SearchBox;
