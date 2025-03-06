import React, { useRef, useEffect, useState } from "react";
import Home from "./Home";
import Counter from "./Counter";
import Audioplay from "./Audio";
import Maps from "./Navermaps";
import Share from "./Share";
import Custompaging from "./Custompaging";
import Message from "../message.webp";
import Tel from "../tel.webp";
import Copy from "../copy.webp";

const Old = () => {

    const handleCopyUrl = (gubun) => {
        const accountText = document.getElementById(gubun).innerText;
        const accountNumber = accountText.split(" ")[1]; // 계좌 번호만 추출
        navigator.clipboard.writeText(accountNumber).then(() => {
            alert("계좌번호가 복사되었습니다!");
        });
    };

    return(
        <>
            <div>
                <Audioplay clickEvent="play"/>
            </div>

            <Home/>

            <div className="kr-font">
                <h2 className='mt40 title-font red'>2025.04.12 PM 01:10 </h2>
                <h2 className='mt10 navy'> 한승수 ♥ 김송이 </h2>
                <h4 className='mt5 navy'>웨스턴팰리스 웨스턴 홀</h4>
                <h4 className='mt5 navy'>인천 부평구 부평대로278번길 16</h4>
                <h1 className='mt40 title-font red'> 소중한 분들을 초대합니다.</h1>
                <h4 className='mt30 navy'>승수 그리고 송이 결혼합니다.</h4>
                <h4 className='mt5 navy'>함께 있을때 가장 나다운 모습이 되고</h4>
                <h4 className='mt5 navy'>함께 있을때 미래를 꿈꾸게 하는 사람을 만나</h4>
                <h4 className='mt5 navy'>함께한지 일곱번째 봄, 결혼합니다.</h4>
                <h4 className='mt5 navy'>지금처럼 서로의 가장 친한친구가 되어</h4>
                <h4 className='mt5 navy'>예쁘고 행복하게 잘 살겠습니다.</h4>
                <h4 className='mt5 navy'>저희의 새로운 시작을 함께 축복해주세요.</h4>

                
                <h1 className='mt40 title-font red'> 함께한 시간 </h1>
                <div className="countSize peach">
                    <Counter/>
                </div>

                <div className="mt30">
                    <Custompaging />
                </div>

                <div className="mt30">
                    <Maps />
                </div>

                <h1 className="mt20 title-font red"> 마음 전하실 곳 </h1>
                <div className="accountArea">
                    <div className="mt20 accountMan">
                        <h2 className="navy1"> 신랑 측 </h2>
                        <div>
                            <h3> 신랑 <spen> 한승수 </spen>
                                <a href="tel:010-6471-5872">
                                    <img className="ml5 phoneNumber" src={Tel}/>
                                </a>
                                <a href="sms:010-6471-5872">
                                    <img className="ml5 phoneNumber" src={Message}/>
                                </a>
                            </h3>

                            <h4 className="account_num" id="man">국민 903802-01-191037
                            <button onClick={() => {
                                handleCopyUrl("man");
                            }}>
                                <img className="ml5 phoneNumber" src={Copy} />
                            </button>
                            </h4>
                            <h3> 아버지 <spen> 한 철 </spen>
                                <a href="tel:010-2231-9488">
                                    <img className="ml5 phoneNumber" src={Tel}/>
                                </a>
                                <a href="sms:010-2231-9488">
                                    <img className="ml5 phoneNumber" src={Message}/>
                                </a>
                            </h3>
                            <h4 className="account_num" id="manF">신한 110-029-759749
                            <button onClick={() => {
                                handleCopyUrl("manF");
                            }}>
                                <img className="ml5 phoneNumber" src={Copy} />
                            </button>
                            </h4>
                            <h3> 어머니 <spen> 김회정 </spen>
                                <a href="tel:010-6331-7833">
                                    <img className="ml5 phoneNumber" src={Tel}/>
                                </a>
                                <a href="sms:010-6331-7833">
                                    <img className="ml5 phoneNumber" src={Message}/>
                                </a>
                            </h3>
                            <h4 className="account_num" id="manM">우리 1002-932-880-772
                            <button onClick={() => {
                                handleCopyUrl("manM");
                            }}>
                                <img className="ml5 phoneNumber" src={Copy} />
                            </button>
                            </h4>
                        </div>
                    </div>
                    <div className="accountWom">
                        <h2 className="navy1"> 신부 측 </h2>
                        <div>
                            <h3> 신부 <spen> 김송이 </spen>
                                <a href="tel:010-5242-4766">
                                    <img className="ml5 phoneNumber" src={Tel}/>
                                </a>
                                <a href="sms:010-5242-4766">
                                    <img className="ml5 phoneNumber" src={Message}/>
                                </a>
                            </h3>
                            <h4 className="account_num" id="wom">국민 903802-01-222607
                            <button onClick={() => {
                                handleCopyUrl("wom");
                            }}>
                                <img className="ml5 phoneNumber" src={Copy} />
                            </button>
                            </h4>
                            <h3> 아버지 <spen> 아버님 </spen>
                                <a href="tel:전화번호">
                                    <img className="ml5 phoneNumber" src={Tel}/>
                                </a>
                                <a href="sms:전화번호">
                                    <img className="ml5 phoneNumber" src={Message}/>
                                </a>
                            </h3>
                            <h4 className="account_num" id="womF">00은행 123-456-789
                            <button onClick={() => {
                                handleCopyUrl("womF");
                            }}>
                                <img className="ml5 phoneNumber" src={Copy} />
                            </button>
                            </h4>
                            <h3> 어머니 <spen> 어미님 </spen>
                                <a href="tel:전화번호">
                                    <img className="ml5 phoneNumber" src={Tel}/>
                                </a>
                                <a href="sms:전화번호">
                                    <img className="ml5 phoneNumber" src={Message}/>
                                </a>
                            </h3>
                            <h4 className="account_num" id="womM">00은행 123-456-789
                            <button onClick={() => {
                                handleCopyUrl("womM");
                            }}>
                                <img className="ml5 phoneNumber" src={Copy} />
                            </button>
                            </h4>
                        </div>
                    </div>
                </div>

                <h1 className="title-font red"> 공유하기 </h1>
                <Share/>
            </div>
        </>
    )

}

export default Old;