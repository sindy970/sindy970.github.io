import React, { useState } from "react";

import Home from "./Home";
import Counter from "./Counter";
import Audioplay from "./Audio";
import Snow from "./Snow";
import Imgslick from "./Imgslick";
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
            </div>

            <Home/>

            <div className="kr-font">
                <h2 className='mt30 red'>2025.04.12 PM 01:30 </h2>
                <h2 className='mt10 navy'> 한승수 ♥ 김송이 </h2>
                <h4 className='mt5 navy'> 웨스턴팰리스웨딩 </h4>
                <h4 className='mt5 navy'>인천 부평구 부평대로278번길 16 부평 웨스턴팰리스</h4>
                <h2 className="mt30 peach"> ------------------- </h2>
                <h1 className='mt20 red'> 소중한 분들을 초대합니다.</h1>
                <h4 className='mt5 navy'> 두사람 결혼 축하하고 </h4>
                <h4 className='mt5 navy'> 심심해서 그냥 만들어 봤어 </h4>
                <h4 className='mt5 navy'> 수정은 무제한이고 </h4>
                <h4 className='mt5 navy'> 별로면 안써도 돼 </h4>


                <h2 className="mt30 peach"> ------------------- </h2>
                <h1 className='mt20 red'> 함께한 시간 </h1>
                <div className="countSize peach">
                    <Counter/>
                </div>


                <div className="mt30 imgSliderDiv">
                    {/*<Imgslider/>*/}
                    <Imgslick/>
                </div>

                <h2 className="mt30 peach"> ------------------- </h2>
                <Maps media="mobile_container" gubun="young"/>


                <h2 className="mt30 peach"> ------------------- </h2>

                <h1 className='mt20 red'> 마음 전하실 곳 </h1>
                <div className="mt20 accountAreaY">
                    <button className="mt10 accountButtonY peach" onClick={() => {
                        setIsManButtonClick(!isManButtonClick)
                    }}>{isManButtonClick ? " 신랑측  ▲ " : " 신랑측  ▼ "} </button>

                    <h6 className="mt20 accountSpenY navy">
                        {isManButtonClick && <Togglebutton gubun={"man"}/>}
                    </h6>
                    <button className="mt20 accountButtonY peach" onClick={() => {
                        setIsWomButtonClick(!isWomButtonClick)
                    }}>{isWomButtonClick ? " 신부측  ▲ " : " 신부측  ▼ "} </button>

                    <h6 className="mt20 accountSpenY navy">
                        {isWomButtonClick && <Togglebutton gubun={"wom"}/>}
                    </h6>

                </div>

                <h2 className="mt30 peach"> ------------------- </h2>
                <h1 className='mt20 red'> 공유하기 </h1>
                <Share/>
            </div>
        </>
    );
}

export default Young;