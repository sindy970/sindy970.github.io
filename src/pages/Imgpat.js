import React from 'react';
import { isSafari, isFirefox, isIOS } from 'react-device-detect';
import Sun9 from "../sun5.webp";
import Sun8 from "../sun3.webp";
import Sun7 from "../sun5.webp";
import Sun6 from "../sun3.webp";
import Sun5 from "../sun5.webp";
import Sun3 from "../sun3.webp";
import Sun2 from "../sun5.webp";
import Sun1 from "../sun3.webp";
import Sun from "../sun5.webp";


const Imgpat = () => {
    const imgArr = [Sun, Sun1, Sun2, Sun3, Sun5, Sun6, Sun7, Sun8, Sun9];


    return(
        <>
            <div className="imgArr">
                {imgArr.map((img, index) => (
                    <img key={index} src={img} alt={`Sun ${index}`} />
                ))}
            </div>
        </>
    )

}

export default Imgpat;