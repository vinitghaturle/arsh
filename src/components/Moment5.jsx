import { useState } from "react";
import confetti from 'canvas-confetti';

export default function Moment5(){
  const [open, setOpen] = useState(false);

  function handleOpen(){
    setOpen(true);
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 }, colors: ['#fce4ec', '#f3e5f5', '#d81b60'] });
  }

  return (
    <section id="moment5">
      <p style={{ marginBottom: 20 }}>Click this only if you’re ready 👀</p>
      {!open ? (
        <div className="gift-box" id="giftBox" onClick={handleOpen}>🎁</div>
      ) : null}

      <div className="hidden-content" id="surprise" style={{ display: open ? 'block' : 'none' }}>
        <h2 className="friend-name">You are amazing!</h2>
        <p>1. You make the best snacks.<br/>2. Your laugh is contagious.<br/>3. You are 100% the 'main character'.</p>
        <p style={{ marginTop: 20, fontSize: '0.9rem' }}>(And yes, I still have that embarrassing video of you from 2019.)</p>
      </div>
    </section>
  );
}
