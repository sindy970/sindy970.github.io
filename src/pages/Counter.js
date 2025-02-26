import React, { useEffect, useState }from "react"
import { isSafari, isFirefox, isIOS } from 'react-device-detect';
import Numbercount from "./Numbercount";

const Counter = () => {

    return (
        <>
            {isSafari || isFirefox || isIOS ?
                <div className="countAllS">
                    <div className="countNumS">
                        <Numbercount/><h1>일</h1>
                    </div>
                </div>
                :
                <div className="countAll">
                    <div className="countNum">
                            <Numbercount/>
                    </div>
                    <div className="kr-font countText">
                        <h1>일</h1>
                    </div>
                </div>
            }
        </>
    )
}

export default Counter;