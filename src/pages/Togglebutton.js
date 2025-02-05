import React, { useState } from "react";
import Copy from "../copy.webp"

const Togglebutton = (props) => {

    let res = null;
    let res2 = null;

    if(props.gubun === "man"){
        res2 = "00은행";
        res = "123-456-789";
    } else {
        res2 = "00은행";
        res = "987-654-432";
    }

    const handleCopyUrl = (res) => {
        navigator.clipboard.writeText(res)
            .then(() => {
                alert('클립보드에 복사되었습니다');
            })
            .catch((error) => {
                console.error('클립보드 복사 실패!');
            });
    };


    return(
        <>
            <div className="toggleAll">
                <div className="toggleText">
                    <span>{res2}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{res}</span>
                </div>
                <div className="toggleCopy">
                    <button onClick={() => handleCopyUrl(res)}>
                        &nbsp;&nbsp;<img src={Copy} />
                    </button>
                </div>
            </div>
        </>
    );
}

export default Togglebutton;