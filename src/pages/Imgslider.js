import React, { useEffect, useState } from "react";
import { isSafari, isFirefox, isIOS } from 'react-device-detect';
import Sun5 from "../sun5.webp";
import Sun3 from "../sun3.webp";
import Sun2 from "../sun2.webp";
import Sun1 from "../sun1.webp";
import Sun from "../sun.webp";

const Imgslider = () => {
    const imgArr = [Sun, Sun1, Sun2, Sun3, Sun5];
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
                <img className={isSafari || isFirefox || isIOS ? "imagefile" : undefined}
                    src={imgArr[currentIndex]} />
            </div>
            <div className="preNext">
                <button className="pre" onClick={() => {
                    mButton(currentIndex)
                }}> ◀ </button>
                <button className="next" onClick={() => {
                    pButton(currentIndex)
                }}> ▶ </button>
            </div>
        </div>
    );
}

export default Imgslider;