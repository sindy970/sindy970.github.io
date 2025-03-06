import { useState, useRef, useEffect, useMemo } from "react";
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
import Ring from "../img/ring.jpg";
import Shy from "../img/shy.jpg";
import Sit from "../img/sit.jpg";
import To2 from "../img/to2.jpg";

import Wsolor from "../img/wsolor.jpg";
import Wsolor2 from "../img/wsolor2.jpg";
import Wsolor3 from "../img/wsolor3.jpg";
import Msolor from "../img/msolor.jpg";

// const images = [Moon, Moon2, Baile];
const images = [To2, Bailebb, Baile, Bb, Bb2, Ber, Black, Black2, Defuale, Gg, Gg2, Gg3, Moonflwer, Ring, Shy, Sit, Wsolor, Wsolor2, Wsolor3, Msolor];

export default function Custompaging() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentPageItems, setCurrentPageItems] = useState([]);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);
    const itemsPerPage = 5;

    // 터치 시작
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    // 터치 이동
    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    // 터치 끝났을 때 방향에 따라 슬라이드 이동
    const handleTouchEnd = () => {
        const deltaX = touchStartX.current - touchEndX.current;

        if (deltaX > 50) {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        } else if (deltaX < -50) {
            setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
        }
    };

    // 클릭한 이미지를 기준으로 앞뒤 2개 포함 총 5개 출력
    const calculatePageIndexes = (index) => {
        let startIndex = Math.max(0, index - 2);
        let endIndex = Math.min(images.length, startIndex + itemsPerPage);

        // 만약 마지막 인덱스가 부족하면 앞에서 채우기
        if (endIndex - startIndex < itemsPerPage) {
            startIndex = Math.max(0, endIndex - itemsPerPage);
        }

        return images.slice(startIndex, endIndex);
    };

    // `currentIndex`가 변경될 때마다 `currentPageItems` 업데이트
    useEffect(() => {
        setCurrentPageItems(calculatePageIndexes(currentIndex));
    }, [currentIndex]);

    // 커스텀 페이징 버튼 클릭 시 슬라이드 이동
    const handleThumbnailClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="slider-container">
            {/* ✅ 이미지 슬라이더 */}
            <div
                className="slider-wrapper"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {images.map((src, index) => (
                    <img key={index} src={src} className="slide" />
                ))}
            </div>

            {/* ✅ 커스텀 페이징 */}
            <div className="pagination-container">
                <div className="pagination">
                    <div className="thumbnail-container">
                        <div className="thumbnail-wrapper">
                            {currentPageItems.map((src, index) => (
                                <img
                                    key={index}
                                    src={src}
                                    className={`thumbnail ${images[currentIndex] === src ? "active" : ""}`}
                                    onClick={() => handleThumbnailClick(images.indexOf(src))}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}










