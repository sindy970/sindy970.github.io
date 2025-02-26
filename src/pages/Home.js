import React, {useState, useEffect, useRef} from 'react';
import { isSafari, isFirefox, isIOS } from 'react-device-detect';
import Moon from "../img/moon.jpg"
// import Moon2 from "../img/moon2.jpg"
// import Baile from "../img/baile.jpg";
// import Bailebb from "../img/bailebb.jpg";
import Bb from "../img/bb.jpg";
// import Bb2 from "../img/bb2.jpg";
// import Ber from "../img/ber.jpg";
// import Black from "../img/black.jpg";
// import Black2 from "../img/black2.jpg";
// import Defuale from "../img/defuale.jpg";
// import Gg from "../img/gg.jpg";
// import Gg2 from "../img/gg2.jpg";
// import Gg3 from "../img/gg3.jpg";
// import Moonflwer from "../img/moonflwer.jpg";
// import One from "../img/one.jpg";
// import Ring from "../img/ring.jpg";
// import Shy from "../img/shy.jpg";
// import Sit from "../img/sit.jpg";
// import To from "../img/to.jpg";
// import To2 from "../img/to2.jpg";
// import Smile from "../img/smile.jpg";
// import Smile2 from "../img/smile2.jpg";
// import Step from "../img/step.jpg"
// import Toflower from "../img/toflower.jpg"
// import Top from "../img/top.jpg"
// import White from "../img/white.jpg"


const Home = () => {
    return (
        <>
            {(isSafari || isFirefox || isIOS) ?
                <div className="mainImgDivS">
                    <div className="mainImgS">
                        <img className="imagefile" src={Moon} loading="lazy"/>
                    </div>
                    <div className="mainTextS">
                        <h1 className="en-font peach wedding">Wedding Ceremony</h1>
                    </div>
                </div>
                :
                <div className="mt30 mainImgDiv">
                    <div className="mainImg">
                        <img src={Bb} loading="lazy"/>
                    </div>
                    <div className="mainText">
                        <h1 className="en-font peach wedding">Wedding Ceremony</h1>
                    </div>
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