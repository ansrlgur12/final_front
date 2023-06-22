import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTent, faBed, faLightbulb, faKitchenSet, faChair, faBox, faScrewdriverWrench,faFireBurner, faFan, faCaravan } from '@fortawesome/free-solid-svg-icons';
import  styled, {keyframes,css} from 'styled-components';
import React, {useState} from 'react';

const gradient = keyframes`
  0% {
    background: radial-gradient(circle at center, #58c38c 0%, #fff 0%, #fff 100%);
  }
  25% {
    background: radial-gradient(circle at center, #58c38c 24%, #fff 25%, #fff 100%);
  }
  50% {
    background: radial-gradient(circle at center, #58c38c 49%, #fff 50%, #fff 100%);
  }
  75% {
    background: radial-gradient(circle at center, #58c38c 74%, #fff 75%, #fff 100%);
  }
  100% {
    color: #fff;
    background: radial-gradient(circle at center, #2D6247 99%, #fff 100%, #fff 100%);
  }
`;
export const GridStlye = styled.div`
  
    box-sizing: border-box;
    margin: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    padding-bottom: 70px;

     .grid-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px; 
    width:800px;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 2px;
    margin-top: 100px;
    margin-bottom:50px;
  }
  
  .grid-item {
    border-radius: 4px;
    box-shadow: 1px 1px 1px #ccc;
    border: 1px solid #ccc;
    height: 100px;
    text-align: center;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .grid-item:hover{
    box-shadow: 0px 3px 1px rgba(46, 229, 157, 0.4);
  }
 

 


  .itemName{
    margin-top: 20px;

  }
`
const Button = styled.button`
     width: 150px;
    height: 100%;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color:#2D6247;

  ${({ isSelected }) => isSelected && css`
    opacity: 1;
    animation: ${gradient} 50ms;
    background: #2D6247;
    color: #fff;
    box-shadow: none;
  `}
`;
const ShopCategory = ({ onCategoryChange }) => {
  const [selectedItem, setSelectedItem] = useState(null);
 
    const items = [
        {icon: faTent, name: '텐트'},
        {icon: faBed, name: '취침장비'},
        {icon: faLightbulb, name: '라이트'},
        {icon: faKitchenSet, name: '키친'},
        {icon: faChair, name: '캠핑가구'},
        {icon: faBox, name: '수납용품'},
        {icon: faScrewdriverWrench, name: '공구'},
        {icon: faFireBurner, name: 'BBQ'},
        {icon: faFan, name: '계절용품'},
        {icon: faCaravan, name: 'RV용품'}
      ];
      const handleClick = (name) => {
        onCategoryChange(name.toLowerCase());
        setSelectedItem(name);
      }
  return (
    
    <div className="grid-container">
  {items.map((item, index) => {
        
        return (
          <div className="grid-item" key={index}>
            <Button isSelected={item.name === selectedItem}  onClick={() => handleClick(item.name)}>
              <FontAwesomeIcon icon={item.icon} size='lg' />
              <div className='itemName'>{item.name}</div>
            </Button>
          </div>
        );
      })}
    </div>
  );
}; export default ShopCategory;