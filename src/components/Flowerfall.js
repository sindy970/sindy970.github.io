// import React from "react";
// import Snowfall from "react-snowfall";
// import bloomImage from "../assets/bloom2.png";
//
//
// const Flowerfall = () => {
//
//     const flowerflake1 = document.createElement('img');
//     flowerflake1.src = "../assets/bloom2.png";
//     const flowerflake2 = document.createElement('img');
//     flowerflake2.src = "/assets/bloom.jpg";
//
//     // const colors = ["#FFE2E2", "#FFCFCF"];
//
//
//     return (
//         <Snowfall
//             // color={"#FFE2E2"}
//             style={{ background: '#fff' }}
//             snowflakeCount={200}
//             images={flowerflake1}
//         />
//     )
// }
//
//
// export default Flowerfall;

import React, { useState, useEffect } from "react";
import Snowfall from "react-snowfall";
// import bloom1 from "../assets/bloom1.jpg";
// import bloom2 from "../assets/bloom2.png";

const createImage = (src) => {
    const img = new Image();
    img.src = src;
    return img;
};
const Flowerfall = () => {
    // 이미지 배열 설정

    const [images, setImages] = useState([
        createImage('/assets/bloom1.jpg'),
        createImage('/assets/bloom2.png'),
    ]);

    // 이미지 변경 함수
    const changeImages = () => {
        const newImages = [
            createImage('/assets/bloom1.jpg'),
            createImage('/assets/bloom2.png'),
        ];
        setImages(newImages);
    };

    return (
        <div>
            <button onClick={changeImages}>Change Snowflake Images</button>
            <Snowfall
                style={{ background: '#fff' }}
                snowflakeCount={200}
                images={images} // 이미지 배열 전달
            />
        </div>
    );
};

export default Flowerfall;


