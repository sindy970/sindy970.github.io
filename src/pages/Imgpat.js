import React, { useState } from 'react';
import { isSafari, isFirefox, isIOS } from 'react-device-detect';
import Imgmodal from './Imgmodal'

import Baile from "../img/baile.jpg";
import Bailebb from "../img/bailebb.jpg";
import Bb from "../img/bb.jpg";
import Bb2 from "../img/bb2.jpg";
import Ber from "../img/ber.jpg";
import Black from "../img/black.jpg";
import Black2 from "../img/black2.jpg";
import Defuale from "../img/defuale.jpg";
import Gg from "../img/gg.jpg";
import Gg2 from "../img/gg2.jpg";
import Gg3 from "../img/gg3.jpg";
import Moonflwer from "../img/moonflwer.jpg";
import One from "../img/one.jpg";
import Ring from "../img/ring.jpg";
import Shy from "../img/shy.jpg";
import Sit from "../img/sit.jpg";
import To from "../img/to.jpg";
import To2 from "../img/to2.jpg";

import Wsolor from "../img/wsolor.jpg";
import Wsolor2 from "../img/wsolor2.jpg";
import Wsolor3 from "../img/wsolor3.jpg";
import Msolor from "../img/msolor.jpg";


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