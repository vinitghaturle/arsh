import { useEffect, useRef, useState } from "react";

export default function Moment1() {
  const containerRef = useRef(null);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const lines = el.querySelectorAll('.seq');
    lines.forEach((line, index) => {
      setTimeout(() => line.classList.add('visible'), index * 1500);
    });

    setTimeout(() => setShowBtn(true), lines.length * 1500);
  }, []);

  return (
    <section id="moment1" ref={containerRef}>
      <div className="intro-text">
        <p className="seq">Hey...</p>
        <p className="seq">Arshiya whatsup Happy New Year</p>
        <p className="seq">It’s something for your birthyday hope you like it</p>
        <button
          className="start-btn"
          id="startBtn"
          style={{ opacity: showBtn ? 1 : 0 }}
          onClick={() => {
            const m2 = document.getElementById('moment2');
            m2?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Explore forward →
        </button>
      </div>
    </section>
  );
}
