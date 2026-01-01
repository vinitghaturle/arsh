import { useEffect, useRef } from "react";

export default function Particles(){
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    function createParticle(){
      const particle = document.createElement('div');
      particle.innerHTML = '✨';
      particle.style.position = 'absolute';
      particle.style.left = Math.random() * 100 + 'vw';
      particle.style.top = Math.random() * 100 + 'vh';
      particle.style.opacity = String(Math.random());
      particle.style.fontSize = (Math.random() * 10 + 10) + 'px';
      particle.style.pointerEvents = 'none';
      particle.style.transition = 'all 5s linear';

      container.appendChild(particle);

      setTimeout(() => {
        particle.style.transform = `translateY(-100px) translateX(${Math.random() * 50}px)`;
        particle.style.opacity = '0';
      }, 100);

      setTimeout(() => particle.remove(), 5000);
    }

    const iv = setInterval(createParticle, 500);
    return () => clearInterval(iv);
  }, []);

  return <div className="particles" id="particles" ref={ref} />;
}
