import React, { useState } from "react";
import Home from "./Home";
import Counter from "./Counter";
import Audioplay from "./Audio";
import Snow from "./Snow";
import Maps from "./Navermaps";
import Share from "./Share";
import Imgslider from "./Imgslider";
import Togglebutton from "./Togglebutton";

const Young = () => {
    const [isManButtonClick, setIsManButtonClick] = useState(false);
    const [isWomButtonClick, setIsWomButtonClick] = useState(false);

    return (
        <>
            <div>
                <Audioplay clickEvent="play"/>
                <Snow/>
            </div>

            <Home/>

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
                    <Counter/>
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
                <div className="accountAreaY">
                    <button className="accountButtonY" onClick={() => {
                        setIsManButtonClick(!isManButtonClick)
                    }}>{isManButtonClick ? " 신랑측  ▲ " : " 신랑측  ▼ "} </button>
                    <br/>
                    <span className="accountSpenY">
                        {isManButtonClick && <Togglebutton gubun={"man"}/>}
                    </span><br/><br/>
                    <button className="accountButtonY" onClick={() => {
                        setIsWomButtonClick(!isWomButtonClick)
                    }}>{isWomButtonClick ? " 신부측  ▲ " : " 신부측  ▼ "} </button>
                    <br/>
                    <span className="accountSpenY">
                        {isWomButtonClick && <Togglebutton gubun={"wom"}/>}
                    </span>
                    <br/><br/>
                </div>

                <h2 className="gubunLine"> -------------- </h2>
                <h1> 공유하기 </h1>
                <Share/>
            </div>
        </>
    );
}

export default Young;