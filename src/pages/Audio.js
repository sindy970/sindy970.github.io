import React from "react";
import Music from '../music1.mp3';

const Audio = () => {
    const audio = new Audio(Music);
    audio.play();
}

export default Audio;