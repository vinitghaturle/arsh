export default function Moment3() {
  return (
    <section id="moment3">
      <h2 style={{ marginBottom: 50, fontWeight: 300 }}>Little moments, big memories</h2>
      <div className="scrapbook-grid">
        <div className="polaroid" data-aos="zoom-in">
          <video autoPlay muted loop playsInline>
            <source src="https://drive.google.com/file/d/1-4-taFol0dUvpgEl6mpU0962sG_o2Dj0/view?usp=drivesdk" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>That day at the beach...</p>
        </div>

        <div className="polaroid" data-aos="zoom-in" data-aos-delay="200">
          <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=400&q=80" alt="Memory" />
          <p>Coffee and 3am talks.</p>
        </div>

        <div className="polaroid" data-aos="zoom-in" data-aos-delay="400">
          <img src="https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?auto=format&fit=crop&w=400&q=80" alt="Memory" />
          <p>We didn't plan this day, but it stayed.</p>
        </div>
      </div>
    </section>
  );
}
