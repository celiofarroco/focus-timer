export default function () {
  /*  const bg007 = new Audio(
    "https://soundcloud.com/gordon-sears-216934987/goldeneye-007-menu-pause-music?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
  ); */
  const buttonPressAudio = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"
  );
  const kitchenTimer = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
  );
  const bgAudio = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true"
  );

  bgAudio.loop = true;

  function pressButton() {
    buttonPressAudio.play();
  }

  function timeEnd() {
    kitchenTimer.play();
  }

  return {
    //bg007,
    pressButton,
    timeEnd,
    bgAudio,
  };
}
