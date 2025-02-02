import React, { useRef, useEffect, useState } from "react";
import {Routes, Route, Link} from "react-router-dom";
import { isSafari, isFirefox } from 'react-device-detect';
import Numbercount from "./pages/Numbercount";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import Audioplay from "./pages/Audio";
import Sun5 from "./sun5.webp"
import Snow from "./pages/Snow";
import Maps from "./pages/Navermaps";
import Togglebutton from "./pages/Togglebutton";
import Share from "./pages/Share";
import Imgslider from "./pages/Imgslider";
import LinkImg from "./link.webp";
import KakaoImg from "./kakao.webp";

function App() {
    const [isManButtonClick, setIsManButtonClick] = useState(false);
    const [isWomButtonClick, setIsWomButtonClick] = useState(false);

    const handleCopyUrl = (gubun) => {
        const accountText = document.getElementById(gubun).innerText;
        const accountNumber = accountText.split(" ")[2]; // 계좌 번호만 추출
console.log(accountNumber);
        navigator.clipboard.writeText(accountNumber).then(() => {
            alert("계좌번호가 복사되었습니다!");
        });
    };

  return (
    <div className="App">
        <div>
            <Audioplay clickEvent="play" />
            <Snow />
        </div>

        <Home />

        {/*<div className="mainImgDiv">*/}
        {/*    <div className="mainImg">*/}
        {/*        <img src ={Sun5} loading="lazy" />*/}
        {/*    </div>*/}
        {/*    <div className="mainText">*/}
        {/*        <h1 className="wedding">Wedding Ceremony</h1>*/}
        {/*    </div>*/}
        {/*</div>*/}
        <div className="text">
            <br/><span>2025.04.12 PM 01:30 </span><br/>
            <span> 한승수 ♥ 김송이 </span><br/><br/>
            <span> 웨스턴팰리스웨딩 </span><br/>
            <p>인천 부평구 부평대로278번길 16 부평 웨스턴팰리스</p><br/><br/>
            <h2 className="gubunLine"> ------------------- </h2>
            <h1> 소중한 분들을 초대합니다.</h1><br/>
            <span> 두사람 결혼 축하하고 </span><br/>
            <span> 심심해서 그냥 만들어 봤어 </span><br/>
            <span> 수정은 무제한이고 </span><br/>
            <span> 별로면 안써도 돼 </span><br/>

            <br/>
            <h2 className="gubunLine"> ------------- </h2>
            <h1> 함께한 시간 </h1><br/>
            <div className="countSize">
                <Counter />
            </div>

            <br/><br/>

            <div className="imgSliderDiv">
                <Imgslider/>
            </div>
            <br/><br/>
            <h2 className="gubunLine"> -------------- </h2>
            <Maps media="mobile_container"/>

            <br/>
            <br/>
            <h2 className="gubunLine"> ---------------------- </h2>

            <h1> 마음 전하실 곳 </h1><br/>
            <div className="accountArea">
                <div className="accountMan">
                    <span> 신랑측 </span><br /><br />
                    <div>
                        <p> 신랑 <span> 한승수 </span></p>
                        <span id="man"> 00은행 &nbsp;&nbsp; 123-456-789  </span><br />
                        <button onClick={() => { handleCopyUrl("man"); }}>계좌 복사</button><br /><br />
                        <p> 아버지 <span> 한 철 </span></p>
                        <span id="manF"> 00은행 &nbsp;&nbsp; 123-456-789 </span><br />
                        <button onClick={() => { handleCopyUrl("manF"); }}>계좌 복사</button><br /><br />
                        <p> 어머니 <span> 김회정 </span></p>
                        <span id="manM"> 00은행 &nbsp;&nbsp; 123-456-789 </span><br />
                        <button onClick={() => { handleCopyUrl("manM"); }}>계좌 복사</button><br /><br />
                    </div>
                </div>
                <div className="accountWom">
                    <span> 신부측 </span><br /><br />
                    <div>
                        <p> 신부 <span> 김송이 </span></p>
                        <span id="wom"> 00은행 &nbsp;&nbsp; 123-456-789 </span><br />
                        <button onClick={() => { handleCopyUrl("wom"); }}>계좌 복사</button><br /><br />
                        <p> 아버지 <span> 아버님 </span></p>
                        <span id="womF"> 00은행 &nbsp;&nbsp; 123-456-789 </span><br />
                        <button onClick={() => { handleCopyUrl("womF"); }}>계좌 복사</button><br /><br />
                        <p> 어머니 <span> 어미님 </span></p>
                        <span id="womM"> 00은행 &nbsp;&nbsp; 123-456-789 </span><br />
                        <button onClick={() => { handleCopyUrl("womM"); }}>계좌 복사</button><br /><br />
                    </div>

                </div>
                {/*<button className="accountButton" onClick={() => {*/}
                {/*    setIsManButtonClick(!isManButtonClick)*/}
                {/*}}>{isManButtonClick ? " 신랑측  ▲ " : " 신랑측  ▼ "} </button>*/}
                {/*<br/>*/}
                {/*<span className="accountSpen">*/}
                {/*    {isManButtonClick && <Togglebutton gubun={"man"}/>}*/}
                {/*</span><br/><br/>*/}
                {/*<button className="accountButton" onClick={() => {*/}
                {/*    setIsWomButtonClick(!isWomButtonClick)*/}
                {/*}}>{isWomButtonClick ? " 신부측  ▲ " : " 신부측  ▼ "} </button>*/}
                {/*<br/>*/}
                {/*<span className="accountSpen">*/}
                {/*    {isWomButtonClick && <Togglebutton gubun={"wom"}/>}*/}
                {/*</span>*/}
                <br/><br/>
            </div>

            <h2 className="gubunLine"> -------------- </h2>
            <h1> 공유하기 </h1>
            <Share/>
        </div>
    </div>
  );
}

export default App;
//
// {/*<div className="audio-player">*/}
// {/*    <audio ref={audioRef} src={Music} preload="auto" />*/}
// {/*    /!*<button onClick={toggleAudio} style={{display: 'none'}}></button>*!/*/}
// {/*</div>*/}

// JSX ==> xml 코드
// class === className
// 싱글페이지 어플리케이션(SPA)
//    필요한 부분만 바꾸는것을 의미
// 라우팅 처리 ==> 우리가 원하는 컴포넌트를 보여주는것, 컴포넌트를 매핑하고 랜더링 하는것을 의미
// Link == a태그
// <Link to={"/"}>Home</Link> ===> <a href="/">Home</a>
// <Routes> ==> 화면이 전환 될때마다 어떤 컴포넌트를 보여줄지 정의하기 위해 사용함
//        <Routes>는 <Route>의 묶음이다.
// link에서 to로 정의한 경로와 같은 route path를 찾음
//   <nav>
//       <Link to={"/navermaps"}>Navermaps</Link> | <Link to={"/home"}>Home</Link> | <Link to={"/flower"}>Flowereffect</Link>  | <Link to={"/counter"}>Counter</Link>  | <Link to={"/snow"}>Snow</Link>
//
//   </nav>
//   <Routes>
//       <Route path="/navermaps" element={<Navermaps />} />
//       <Route path="/home" element={<Home />} />
//       <Route path="/flower" element={<Flowereffect />} />
//       <Route path="/counter" element={<Counter />} />
//       <Route path="/snow" element={<Snow />} />
//   </Routes>