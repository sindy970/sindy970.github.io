import React, { useRef, useEffect, useState } from "react";
import {Routes, Route, Link} from "react-router-dom";
// import Work from "./pages/Work"
import Counter from "./pages/Counter";
import Numbercount from "./pages/Numbercount";
import Home from "./pages/Home";
import Audioplay from "./pages/Audio";
import Music from './music1.mp3';
import Sun5 from "./sun5.webp"
import Flowereffect from "./pages/Flowereffect";
import Snow from "./pages/Snow";
import Maps from "./pages/Navermaps";

function App() {
    const audioRef = useRef(null);

  return ( // JSX ==> xml 코드
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
    <div className="App">
        <div>
            <Audioplay clickEvent="play" />
            <Snow />
        </div>
        <div className="engText">
            {/*<h1 className="married"> We Are Getting Married. </h1>*/}
            {/*<h1 className="married"> 우리 결혼 합니다 </h1>*/}
            <h1 className="wedding">Wedding Ceremony</h1>
            <img src ={Sun5} loading="lazy" />
        </div>
        <div className="text">
            <br /><spen>2025.04.12 PM 01:30 </spen><br />
            <spen> 한승수 ♥ 김송이 </spen><br /><br />
            <spen> 웨스턴팰리스웨딩 </spen><br />
            <p>인천 부평구 부평대로278번길 16 부평 웨스턴팰리스</p><br/><br/>

            <h1> 소중한 분들을 초대합니다.</h1><br/>
            <spen> ohohohohohoh </spen><br />
            <spen> ohohohohohoh </spen><br />
            <spen> ohohohohohoh </spen><br />
            <spen> ohohohohohoh </spen><br />

            
            <h1> 우리가 함께한 시간 <Numbercount/></h1>
            <Maps media="mobile_container" />
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