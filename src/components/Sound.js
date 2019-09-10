import React from "react";
import soundfile from "../sound.mp3";

alert = tSc => {
  // create HTMLAudioElement
  let audio = new Audio(soundfile);

  if (tSc === timerStates.COMPLETE)
    return (
      // play HTMLAudioElement
      audio.play()
    );
};
