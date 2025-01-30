import React, { useEffect, useState } from "react";
import LinkImg from "../link.webp";
import KakaoImg from "../kakao.webp";
import Sun5 from "../sun5.webp";

const Imgslider = () => {
    const imgArr = [LinkImg, KakaoImg, Sun5];
    const [currentIndex, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((currentIndex + 1) % imgArr.length);
            }, 3000);
        return () => clearInterval(intervalId);
        }, [currentIndex]);

    const mButton = (currentIndex) => {
        if(currentIndex === 0){
            setIndex(imgArr.length - 1);
        } else {
            setIndex(currentIndex - 1 );
        }
    };

    const pButton = (currentIndex) => {
        if(currentIndex === (imgArr.length - 1)){
            setIndex(0);
        } else {
            setIndex(currentIndex + 1 );
        }
    };

    return (
        <div className="imageA">
            <div className="imgbox">
                <img src={imgArr[currentIndex]} />
            </div>
            <div className="preNext">
                <button className="pre" onClick={() => {
                    mButton(currentIndex)
                }}> 이전 </button>
                <button className="next" onClick={() => {
                    pButton(currentIndex)
                }}> 다음 </button>
            </div>
        </div>
    );
}

export default Imgslider;