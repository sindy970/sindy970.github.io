import React, { useRef, useEffect, useState } from "react";
import Home from "./Home";
import Counter from "./Counter";
import Imgpat from "./Imgpat";
import Audioplay from "./Audio";
import Snow from "./Snow";
import Maps from "./Navermaps";
import Share from "./Share";
import Imgslider from "./Imgslider";
import Imgtep from "./Imgtep";
import Message from "../message.webp";
import Tel from "../tel.webp";
import Copy from "../copy.webp";

const Old = () => {

    const handleCopyUrl = (gubun) => {
        const accountText = document.getElementById(gubun).innerText;
        const accountNumber = accountText.split(" ")[2]; // 계좌 번호만 추출
        console.log(accountNumber);
        navigator.clipboard.writeText(accountNumber).then(() => {
            alert("계좌번호가 복사되었습니다!");
        });
    };

    return(
        <>
            <div>
                <Audioplay clickEvent="play"/>
                <Snow/>
            </div>

            <Home/>

            <div className="kr-font">
                <h2 className='mt30 red'>2025.04.12 PM 01:30 </h2>
                <h2 className='mt10 navy'> 한승수 ♥ 김송이 </h2>
                <h4 className='mt5 navy'> 웨스턴팰리스웨딩 </h4>
                <h4 className='mt5 navy'>인천 부평구 부평대로278번길 16</h4>
                <h4 className='mt5 navy'>웨스턴팰리스</h4>
                <h6 className="mt30 en-font peach"> i n v i t e </h6>
                <h1 className='mt20 red'> 소중한 분들을 초대합니다.</h1>
                <h4 className='mt5 navy'> 두사람 결혼 축하하고 </h4>
                <h4 className='mt5 navy'> 심심해서 그냥 만들어 봤어 </h4>
                <h4 className='mt5 navy'> 수정은 무제한이고 </h4>
                <h4 className='mt5 navy'> 별로면 안써도 돼 </h4>

                
                <h6 className="mt30 en-font peach"> T o g e t h e r </h6>
                <h1 className='mt20 red'> 함께한 시간 </h1>
                <div className="countSize peach">
                    <Counter/>
                </div>

                <h6 className="mt40 en-font peach"> G a l l e r y </h6>
                <Imgtep />

                <h6 className="mt30 en-font peach"> D i r e c t i o n s </h6>
                <Maps media="mobile_container" gubun="old"/>

                <h2 className="mt30 en-font peach"> A c c o u n t </h2>

                <h1 className='mt20 red'> 마음 전하실 곳 </h1>
                <div className="mt20 accountArea">
                    <div className="mt20 accountMan">
                        <span> 신랑측 </span>
                        <div>
                            <p> 신랑 <span> 한승수 </span>&nbsp;
                                <a href="tel:전화번호">
                                    <img className="phoneNumber" src={Tel}/>
                                </a>&nbsp;&nbsp;&nbsp;
                                <a href="sms:전화번호">
                                    <img className="phoneNumber" src={Message}/>
                                </a>
                            </p>

                            <span id="man"> 00은행 &nbsp;&nbsp; 123-456-789  </span>
                            <button onClick={() => {
                                handleCopyUrl("man");
                            }}>
                                <img className="phoneNumber" src={Copy} />
                            </button>
                            
                            <p> 아버지 <span> 한 철 </span>&nbsp;
                                <a href="tel:전화번호">
                                    <img className="phoneNumber" src={Tel}/>
                                </a>&nbsp;&nbsp;&nbsp;
                                <a href="sms:전화번호">
                                    <img className="phoneNumber" src={Message}/>
                                </a>
                            </p>
                            <span id="manF"> 00은행 &nbsp;&nbsp; 123-456-789 </span>
                            <button onClick={() => {
                                handleCopyUrl("manF");
                            }}>
                                <img className="phoneNumber" src={Copy} />
                            </button>
                            
                            <p> 어머니 <span> 김회정 </span>&nbsp;
                                <a href="tel:전화번호">
                                    <img className="phoneNumber" src={Tel}/>
                                </a>&nbsp;&nbsp;&nbsp;
                                <a href="sms:전화번호">
                                    <img className="phoneNumber" src={Message}/>
                                </a>
                            </p>
                            <span id="manM"> 00은행 &nbsp;&nbsp; 123-456-789 </span>
                            <button onClick={() => {
                                handleCopyUrl("manM");
                            }}>
                                <img className="phoneNumber" src={Copy} />
                            </button>
                            
                        </div>
                    </div>
                    <div className="accountWom">
                        <span> 신부측 </span>
                        <div>
                            <p> 신부 <span> 김송이 </span>&nbsp;
                                <a href="tel:전화번호">
                                    <img className="phoneNumber" src={Tel}/>
                                </a>&nbsp;&nbsp;&nbsp;
                                <a href="sms:전화번호">
                                    <img className="phoneNumber" src={Message}/>
                                </a>
                            </p>
                            <span id="wom"> 00은행 &nbsp;&nbsp; 123-456-789 </span>
                            <button onClick={() => {
                                handleCopyUrl("wom");
                            }}>
                                <img className="phoneNumber" src={Copy} />
                            </button>
                            
                            <p> 아버지 <span> 아버님 </span>&nbsp;
                                <a href="tel:전화번호">
                                    <img className="phoneNumber" src={Tel}/>
                                </a>&nbsp;&nbsp;&nbsp;
                                <a href="sms:전화번호">
                                    <img className="phoneNumber" src={Message}/>
                                </a>
                            </p>
                            <span id="womF"> 00은행 &nbsp;&nbsp; 123-456-789 </span>
                            <button onClick={() => {
                                handleCopyUrl("womF");
                            }}>
                                <img className="phoneNumber" src={Copy} />
                            </button>
                            
                            <p> 어머니 <span> 어미님 </span>&nbsp;
                                <a href="tel:전화번호">
                                    <img className="phoneNumber" src={Tel}/>
                                </a>&nbsp;&nbsp;&nbsp;
                                <a href="sms:전화번호">
                                    <img className="phoneNumber" src={Message}/>
                                </a>
                            </p>
                            <span id="womM"> 00은행 &nbsp;&nbsp; 123-456-789 </span>
                            <button onClick={() => {
                                handleCopyUrl("womM");
                            }}>
                                <img className="phoneNumber" src={Copy} />
                            </button>
                            
                        </div>

                    </div>
                    
                </div>

                <h6 className="mt30 en-font peach"> S h a r e </h6>
                <h1 className="red"> 공유하기 </h1>
                <Share/>
            </div>
        </>
    )

}

export default Old;