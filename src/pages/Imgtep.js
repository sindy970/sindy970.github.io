import { useState } from 'react';
import styled from 'styled-components';
import Imgpat from './Imgpat';

// Styled-Component 라이브러리를 활용해 TabMenu 와 Desc 컴포넌트의 CSS를 구현.

const TabMenu = styled.ul`
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    text-align: center;
    font-family: 'eng';
    font-size: large;
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style: none;
    color: #222831;

  .submenu {
  // 기본 Tabmenu 에 대한 CSS를 구현
    display: flex;
    /* justify-content: space-between;
    width: 380px;
    heigth: 30px; */
    width: calc(100% /3);
    padding: 10px;
    font-size: 15px;
    transition: 0.5s;
    border-radius: 10px 10px 0px 0px;
  }

  .focused {
   //선택된 Tabmenu 에만 적용되는 CSS를 구현
    background-color: #00ADB5;
    color: #EEEEEE;
  }

  & div.desc {
    text-align: center;
  }
`;

const Desc = styled.div`
  text-align: center;
`;

const Imgtep = () => {
    // Tab Menu 중 현재 어떤 Tab이 선택되어 있는지 확인하기 위한 currentTab 상태와 currentTab을 갱신하는 함수가 존재해야 하고, 초기값은 0.
    const [currentTab, clickTab] = useState(0);

    const menuArr = [
        { name: 'Together', content: <Imgpat gubun = 'to'/> },
        { name: 'Solo', content: <Imgpat gubun = 'so'/> },
    ];

    const selectMenuHandler = (index) => {
        clickTab(index);
    };

    return (
        <>
            <div>
                <TabMenu>
                    {menuArr.map((el,index) => (
                        <li className={index === currentTab ? "submenu focused" : "submenu" }
                            onClick={() => selectMenuHandler(index)}>{el.name}</li>
                    ))}
                </TabMenu>
                <Desc>
                    <p>{menuArr[currentTab].content}</p>
                </Desc>
            </div>
        </>
    );
};

export default Imgtep;
