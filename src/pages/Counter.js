import React, { useEffect, useState }from "react"
import { Mobile, PC } from "../hook/Mediaquery"
import Maps from "./Navermaps"
import Snow from "./Snow"
import "../index.css";
// import Home from "./Home"

const Counter = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const currentScroll = window.scrollY;
            const scrollRatio = Math.min(currentScroll / maxScroll, 1); // 0 ~ 1 비율 계산
            setScrollPosition(scrollRatio);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div style={{ transform: `translateX(${(1 - scrollPosition) * -100}%)` }}>
                <Mobile>
                    <div className="mobile_container">
                        <div className="animation-container">
                            이건 모바일 !!
                            <Snow />
                            <Maps media="mobile_container" />
                        </div>
                    </div>
                </Mobile>
            </div>
        </>
    )
}

export default Counter;