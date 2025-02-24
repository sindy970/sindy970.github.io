import { useState, useRef } from 'react';
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

const Imgmodal = (props) => {
    const modalBackground = useRef();

    return (
        <div
            className="modal-container"
            ref={modalBackground}
            onClick={(e) => {
                // 배경 클릭 시 모달 닫기
                if (e.target === modalBackground.current) {
                    props.onClose();
                }
            }}
        >
            <div className="modal-content">
                {/* 닫기 버튼 클릭 시 모달 닫기 */}
                <button className="modal-close-btn" onClick={props.onClose}>
                    X
                </button>
                <img src={props.ImgName} alt="Modal content" />
            </div>
        </div>
    );
};

export default Imgmodal;