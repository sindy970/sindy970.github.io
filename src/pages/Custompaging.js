import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Moon from "../img/moon.jpg";
import Moon2 from "../img/moon2.jpg";
import Baile from "../img/baile.jpg";

const imagess = [Moon, Moon2, Baile];
export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className="container">
            <div className="slider-wrapper">
                <Slider {...settings}>
                    {
                        imagess.map((item, index) => {
                            return (
                                <div key={index} className="slide">
                                    <img src={item} />
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    );
}