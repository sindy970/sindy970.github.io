import React, { useEffect, useRef, useState } from "react";
import Music from '../DAY6 데이식스 Welcome to the Show.mp3';

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

    // useEffect(() => {
    //     // 컴포넌트가 렌더링된 후 버튼을 자동으로 클릭
    //     if (props.clickEvent) {
    //         toggleAudio();
    //         // audio.play();
    //         // setShowNextComponent(true);
    //     }
    // }, []);
    //
    // const toggleAudio = () => {
    //     audio.play();
    // };

    return (
        <div>
            <audio ref={audioRef} src={Music} loop style={{background: 'none'}}></audio>

        </div>
    );

};
export default Audioplay;

// <button onClick={() => {
//     if (props.clickEvent) {
//         audioRef.current.play(); // 버튼 클릭 시 음악 재생
//     }
// }} >
// </button>

//
// <audio
//
//     loop // 무한 재생을 위한 loop 속성
//     autoPlay // 페이지 로드시 자동 재생
//     style={{background: 'none'}}
// >
//     <source src={Music} type="audio/mpeg"/>
// </audio>