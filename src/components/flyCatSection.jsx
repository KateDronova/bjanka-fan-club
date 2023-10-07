import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/flyCatSection.css';
import ParallaxHeader from './parallaxHeader';

function FlyCatSection() {
  const [transformStyle, setTransformStyle] = useState('');
  const SPEED = 0.01;
  const { t } = useTranslation();

  function onMouseMove(event) {
    const horizontal = -(event.clientY - window.innerHeight / 2) * SPEED;
    const vertical = (event.clientX - window.innerWidth / 2) * SPEED;

    setTransformStyle(`rotateX(${horizontal}deg) rotateY(${vertical}deg)`);
  }
  function onMouseOut() {
    setTransformStyle('');
  }

  return (
    <section
      className="parallax"
      onMouseMove={onMouseMove}
      onMouseOut={onMouseOut}
      style={{ transform: transformStyle }}
    >
      <div className="parallax__wrapper">
        {/* <header className="parallax__header"> */}
        <ParallaxHeader>
          <h2 className="parallax__title">
            {t('drea')}
            <span>{t('meow')}</span>
            {t('high')}
          </h2>
          <h3 className="parallax__subtitle">{t('justFly')}</h3>
        </ParallaxHeader>
        {/* </header> */}
      </div>
      <div className="parallax__back"></div>
      <div className="parallax__middle"></div>
      <div className="parallax__front"></div>
    </section>
  );
}

export default FlyCatSection;
