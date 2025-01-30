import React, { useState } from "react";

const Togglebutton = (props) => {

    let res = null;

    if(props.gubun === "man"){
        res = "123-456-789";
    } else {
        res = "987-654-432";
    }

    const handleCopyUrl = (res) => {
        // navigator.clipboard.writeText(res)
        //     .then(() => {
        //         alert('클립보드에 복사되었습니다');
        //     })
        //     .catch((error) => {
        //         console.error('클립보드 복사 실패!');
        //     });
    };


    return(
        <>
            <div>
                <div>
                    <spen>{res}</spen>
                    <button onClick={handleCopyUrl(res)}>계좌 복사</button>
                </div>
                <div>
                </div>
            </div>
        </>
    );
}

export default Togglebutton;