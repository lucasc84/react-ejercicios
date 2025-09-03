import {useRef} from 'react';

export default function RefEjemplo () {

  const videoRef = useRef(null);

  const clicksRef = useRef(0);
  
  const handlePlay = () => {
    videoRef.current.play();
    clicksRef.current++;
    console.log ('Clicks Acumulados:' + clicksRef.current);
  };

  const handleClickPause = () => {
    videoRef.current.pause();
    clicksRef.current++;
    console.log ('Clicks Acumulados' + clicksRef.current);
  };

  return (
    <section
      style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px'}}>

      <h1>
        useRef - Ejemplos
      </h1>

      <video ref={videoRef} src="https://www.w3schools.com/html/mov_bbb.mp4" style={{width: '300px'}}></video>

      <article style={{display: 'flex', gap: '10px'}}>

 <button onClick={handlePlay}>Play</button>
      <button onClick={handleClickPause}>Pause</button>
      </article>
    </section>
  )
}
