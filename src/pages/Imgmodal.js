import { useState, useRef } from 'react';
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