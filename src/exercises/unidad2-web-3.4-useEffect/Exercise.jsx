import {useEffect, useState} from 'react';

export default function EffectEjemplo() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      style={{
        height: 1000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h2> Posicion del scroll

      </h2>
      <p>Posicion Actual: {scrollPosition}</p>
    </section>
  )
};
