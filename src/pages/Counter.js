import React, { useEffect, useState }from "react"
import { isSafari, isFirefox, isIOS } from 'react-device-detect';
import Numbercount from "./Numbercount";

const Counter = () => {

    return (
        <>
            <div className="countAll">
                <div className="countNum navy1">
                    <Numbercount/>
                </div>
                <div className="kr-font countText navy1">
                    <h1>일</h1>
                </div>
            </div>
            {/*{isSafari || isFirefox || isIOS ?*/}
            {/*    <div className="countAllS">*/}
            {/*        <div className="countNumS">*/}
            {/*            <Numbercount/><h1>일</h1>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    :*/}

            {/*}*/}
        </>
    )
}

export default Counter;