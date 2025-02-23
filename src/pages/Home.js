import React, {useState, useEffect, useRef} from 'react';
import { isSafari, isFirefox, isIOS } from 'react-device-detect';
import Sun5 from "../sun5.webp"
import Moon from "../img/ring.webp"

const Home = () => {
    return (
        <>
            {(isSafari || isFirefox || isIOS) ?
                <div className="mainImgDivS">
                    <div className="mainImgS">
                        <img className="imagefile" src={Moon} loading="lazy"/>
                    </div>
                    {/*<div className="mainTextS">*/}
                    {/*    <h1 className="weddingS">Wedding Ceremony</h1>*/}
                    {/*</div>*/}
                </div>
                :
                <div className="mainImgDiv">
                    <div className="mainImg">
                        <img src={Moon} loading="lazy"/>
                    </div>
                    {/*<div className="mainText">*/}
                    {/*    <h1 className="wedding">Wedding Ceremony</h1>*/}
                    {/*</div>*/}
                </div>
            }
        </>
    );
};
export default Home;

//lo ==> 화살표 함수

// class 형 컴포넌트 => 요즘 추세
// import React, {Component} from "react";
//
// class Home extends Component{
//     render(){
//         return <h1>Home 화면 입닏.</h1>
//     }
// }
//
// export default Home;
// <div className="text">
//     <h2> 우리가 함께한 시간 <Numbercount/></h2>
// </div>
// <div className="expanding-door-container mobile_container">
//     <img className={`door left-door ${isOpen ? 'open' : ''}`} src={Left} alt='Left'/>
//     <img className={`door right-door ${isOpen ? 'open' : ''}`} src={Right} alt='Right'/>
//     {showNextComponent && <Counter/>}
// </div>