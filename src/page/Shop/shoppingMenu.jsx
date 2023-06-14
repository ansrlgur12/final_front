import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTent, faBed, faLightbulb, faKitchenSet, faChair, faBox, faScrewdriverWrench,faFireBurner, faFan, faCaravan } from '@fortawesome/free-solid-svg-icons';
import { styled } from 'styled-components';

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
  .grid-item button {
    width: 99px;
    height: 100%;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   
  }
  .itemName{
    margin-top: 20px;

  }
`
const ShopCategory = () => {
    const items = [
        {icon: faTent, name: '텐트'},
        {icon: faBed, name: '침낭'},
        {icon: faLightbulb, name: '라이트'},
        {icon: faKitchenSet, name: '키친'},
        {icon: faChair, name: '의자'},
        {icon: faBox, name: '수납용품'},
        {icon: faScrewdriverWrench, name: '공구'},
        {icon: faFireBurner, name: 'BBQ'},
        {icon: faFan, name: '계절용품'},
        {icon: faCaravan, name: 'RV용품'}
      ];

  return (
    
    <div className="grid-container">
      {items.map((item, index) => (
       
        <div className="grid-item" key={index}>
          <button>
            <FontAwesomeIcon icon={item.icon} />
            <div className='itemName'>{item.name}</div>

            
          </button>
        </div>
    
      ))}
    </div>
   
  );
}; export default ShopCategory;