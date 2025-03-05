import React, {useState, useEffect, useRef} from 'react';
import { isSafari, isFirefox, isIOS } from 'react-device-detect';
import Moon from "../img/moon.jpg"

const Home = () => {
    return (
        <>
            {(isSafari || isFirefox || isIOS) ?
                <div className="mainImgDivS">
                    <div className="mainImgS">
                        <img className="imagefile" src={Moon} loading="lazy"/>
                    </div>
                </div>
                :
                <div className="mt30 mainImgDiv">
                    <div className="mainImg">
                        <img src={Moon} loading="lazy"/>
                    </div>
                </div>
            }
        </>
    );
};
export default Home;