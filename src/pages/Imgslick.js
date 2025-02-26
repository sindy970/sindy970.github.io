import Slider from 'react-slick';
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { isSafari, isFirefox, isIOS } from 'react-device-detect';

import Moon from "../img/moon.jpg";
import Moon2 from "../img/moon2.jpg";
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
import Smile from "../img/smile.jpg";
import Smile2 from "../img/smile2.jpg";
import Step from "../img/step.jpg";
import Toflower from "../img/toflower.jpg";
import Top from "../img/top.jpg";
import White from "../img/white.jpg";

const images = [Moon, Moon2, Baile, Bailebb, Bb, Bb2, Ber, Black, Black2, Defuale, Gg, Gg2, Gg3, Moonflwer, One, Ring, Shy, Sit, To, To2, Smile, Smile2, Step, Toflower, Top, White];
const Imgslick = () => {

// 슬라이더 기본 셋팅
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                {images.map((src, index) => (
                    <div key={index}>
                        <img src={src} alt={`Slide ${index}`}/>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Imgslick;