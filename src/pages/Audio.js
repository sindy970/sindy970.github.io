import React, { useEffect, useRef, useState } from "react";
import Music from '../music1.mp3';

const Audioplay = (props) => {
    const audioRef = useRef(null);
    const audio = new Audio(Music);

    useEffect(() => {
        // 컴포넌트가 렌더링된 후 버튼을 자동으로 클릭
        if (props.clickEvent) {
            audio.play();
            // setShowNextComponent(true);
        }
    }, []);

    const toggleAudio = () => {
        audio.play();
    };

    return (
        <div>
            <audio src={Music} loop style={{background: 'none'}}></audio>
            <button onClick={() => {
                if (props.clickEvent) {
                    audioRef.current.play(); // 버튼 클릭 시 음악 재생
                }
            }} >
            </button>
        </div>
    );

};
export default Audioplay;

//
// <audio
//
//     loop // 무한 재생을 위한 loop 속성
//     autoPlay // 페이지 로드시 자동 재생
//     style={{background: 'none'}}
// >
//     <source src={Music} type="audio/mpeg"/>
// </audio>