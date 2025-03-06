import { useState, useRef, useEffect } from "react";
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

// const images = [Moon, Moon2, Baile];
const images = [To2, Bailebb, Baile, Bb, Bb2, Ber, Black, Black2, Defuale, Gg, Gg2, Gg3, Moonflwer, Ring, Shy, Sit, Wsolor, Wsolor2, Wsolor3, Msolor];

export default function Custompaging() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);
    const thumbnailRefs = useRef([]);
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
            // 왼쪽 스와이프 -> 다음 슬라이드
            setCurrentIndex((prev) => (prev + 1) % images.length);
        } else if (deltaX < -50) {
            // 오른쪽 스와이프 -> 이전 슬라이드
            setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
        }
    };

    // 페이지 업데이트 (슬라이드 이동 시)
    const calculatePageIndexes = (index) => {
        // 현재 슬라이드 인덱스를 기준으로 5개씩 페이징 버튼 계산
        const pageStartIndex = Math.floor(index / itemsPerPage) * itemsPerPage;
        const pageEndIndex = pageStartIndex + itemsPerPage;

        return images.slice(pageStartIndex, pageEndIndex);
    };

    // 슬라이드 이동 후 자동으로 페이징 업데이트
    useEffect(() => {
        const newPage = Math.floor(currentIndex / itemsPerPage);
        setCurrentPage(newPage); // 새로운 페이지로 업데이트
    }, [currentIndex]);

    let currentPageItems = calculatePageIndexes(currentIndex);

    // 커스텀 페이징 버튼 클릭 시 슬라이드 이동
    const handleThumbnailClick = (index) => {
        setCurrentIndex(index);
        currentPageItems = calculatePageIndexes(currentIndex);
    };

    // 슬라이드의 이동에 맞게 커스텀 페이징 이동
    const getPaginationTranslateX = () => {
        const pageOffset = (currentPage * itemsPerPage * 60); // 60은 썸네일의 너비와 margin 합
        return `translateX(-${pageOffset}px)`;
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
                        <div
                            className="thumbnail-wrapper"
                            style={{
                                transform: getPaginationTranslateX(), // 페이지 번호에 따라 이동
                            }}
                        >
                            {currentPageItems.map((src, index) => (
                                <img
                                    key={index}
                                    ref={(el) => (thumbnailRefs.current[index] = el)}
                                    src={src}
                                    className={`thumbnail ${currentIndex === index ? "active" : ""}`}
                                    onClick={() => handleThumbnailClick(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}








