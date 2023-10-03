import './flyCatSection.css';
import { useState } from 'react';

function FlyCatSection() {
  const [transformStyle, setTransformStyle] = useState('');
  const SPEED = 0.01;

  function onMouseMove(event) {
    const horizontal = -(event.clientY - window.innerHeight / 2) * SPEED;
    const vertical = (event.clientX - window.innerWidth / 2) * SPEED;

    setTransformStyle(
      `rotateX(${horizontal}deg) rotateY(${vertical}deg)`
    );
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
      <header className="parallax__header">
        <h2 className="parallax__title">
          Drea<span>meow</span> high
        </h2>
        <h3 className="parallax__subtitle">Just fly!</h3>
      </header>
      <div className="parallax__back"></div>
      <div className="parallax__middle"></div>
      <div className="parallax__front"></div>
    </section>
  );
}

export default FlyCatSection;
