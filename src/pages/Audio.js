import React, { useEffect, useRef, useState } from "react";
import Music from '../background.mp3';

const Audioplay = (props) => {
    const audioRef = useRef(new Audio(Music));
    const audio = new Audio(Music);

    // const audioRef = useRef(new Audio("your-audio-file.mp3")); // 오디오 객체 생성

    useEffect(() => {
        // 컴포넌트가 렌더링된 후 버튼을 자동으로 클릭
        if (props.clickEvent) {
            toggleAudio();
        }
    }, [props.clickEvent]); // props.clickEvent가 변경될 때마다 실행되도록 의존성 추가

    const toggleAudio = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    return (
        <div>
            <audio ref={audioRef} src={Music} loop style={{background: 'none'}}></audio>

        </div>
    );

};
export default Audioplay;
