import React, { useState } from 'react';
import { isSafari, isFirefox, isIOS } from 'react-device-detect';
import Imgmodal from './Imgmodal'

import Baile from "../img/baile.webp";
import Bailebb from "../img/bailebb.webp";
import Bb from "../img/bb.webp";
import Bb2 from "../img/bb2.webp";
import Ber from "../img/ber.webp";
import Black from "../img/black.webp";
import Black2 from "../img/black2.webp";
import Defuale from "../img/defuale.webp";
import Gg from "../img/gg.webp";
import Gg2 from "../img/gg2.webp";
import Gg3 from "../img/gg3.webp";
import Moonflwer from "../img/moonflwer.webp";
import One from "../img/one.webp";
import Ring from "../img/ring.webp";
import Shy from "../img/shy.webp";
import Sit from "../img/sit.webp";
import To from "../img/to.webp";
import To2 from "../img/to2.webp";

import Wsolor from "../img/wsolor.webp";
import Wsolor2 from "../img/wsolor2.webp";
import Wsolor3 from "../img/wsolor3.webp";
import Msolor from "../img/msolor.webp";


const Imgpat = (props) => {
    const imgArrTo = [To, To2, Bailebb, Baile, Bb, Bb2, Ber, Black, Black2, Defuale, Gg, Gg2, Gg3, Moonflwer, One, Ring, Shy, Sit];
    const imgArrSo = [Wsolor, Wsolor2, Wsolor3, Msolor, Msolor, Msolor];
    const [modalOpen, setModalOpen] = useState(false);
    const [modalImg, setModalImg] = useState(null);

    const openModal = (img) => {
        setModalImg(img);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return(
        <>
            <div className="imgArr">
                {props.gubun === 'to'
                    ? imgArrTo.map((img, index) => (
                        <button key={index} onClick={() => openModal(img)}>
                            <img src={img} />
                        </button>
                    ))
                    : imgArrSo.map((img, index) => (
                        <button key={index} onClick={() => openModal(img)}>
                            <img src={img} />
                        </button>
                    ))}
            </div>
            {modalOpen && (
                <Imgmodal ImgName={modalImg} onClose={closeModal} />
            )}
        </>
    )

}

export default Imgpat;