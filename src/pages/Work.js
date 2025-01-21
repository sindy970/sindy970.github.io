import React, { useEffect, useState } from "react";
import "../index.css";

const Work = () => {
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
        <div className="animation-container">
            <div
                className="person left"
                style={{ transform: `translateX(${(1 - scrollPosition) * -100}%)` }}
            >
                🚶‍♂️
            </div>
            <div
                className="person right"
                style={{ transform: `translateX(${(1 - scrollPosition) * 100}%)` }}
            >
                🚶‍♀️
            </div>
            <div className="scroll-hint">Scroll to see the animation</div>
        </div>
    );
};

export default Work;
