import { useState, useEffect } from "react";
import confetti from "canvas-confetti";

const TARGET_DATE = new Date("2027-01-01T00:00:00");

export default function Moment5() {
  const [open, setOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);

  function handleOpen() {
    setOpen(true);

    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#fce4ec", "#f3e5f5", "#d81b60"],
    });
  }

  useEffect(() => {
    if (!open) return;

    function calculateTimeLeft() {
      const now = new Date();
      const diff = TARGET_DATE - now;

      if (diff <= 0) {
        setTimeLeft(null);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [open]);

  return (
    <section id="moment5">
      {!open && (
  <p style={{ marginBottom: 20 }}>
    Click this only if you’re ready 👀
  </p>
)}

      {!open && (
        <div className="gift-box" onClick={handleOpen}>
          🎁
        </div>
      )}

      {open && (
        <div className="hidden-content">
          <h2 className="friend-name">Surprise loading… ⏳</h2>

          {timeLeft ? (
            <>
              <p className="countdown" style={{ marginTop: 16, fontSize: "1.95rem" }}>
                {timeLeft.days} days {timeLeft.hours} hours{" "}
                {timeLeft.minutes} minutes {timeLeft.seconds} seconds
              </p>

              <p style={{ marginTop: 16, fontSize: "1.95rem" }}>
                A surprise gift awaits you on your next birthday 🎂
              </p>
            </>
          ) : (
            <p>🎉 It’s time. Happy Birthday!</p>
          )}
        </div>
      )}
    </section>
  );
}

