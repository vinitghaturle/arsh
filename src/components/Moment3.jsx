export default function Moment3() {
  return (
    <section id="moment3">
      <h2 style={{ marginBottom: 50, fontWeight: 300 }}>
        Little moments, big memories
      </h2>
      <div className="scrapbook-grid">
        <div className="polaroid" data-aos="zoom-in">
          <video
            className="polo"
            autoPlay
            muted
            loop
            playsInLine
            style={{
              pointerEvents: "none",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          >
            <source
              src="https://res.cloudinary.com/dtrc2uihp/video/upload/f_mp4/q_auto/
t7u4brgwvbf01ipi3bss.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <p>I wish You and Parth always stay together...</p>
        </div>

        <div className="polaroid" data-aos="zoom-in" data-aos-delay="200">
          <img
            src="https://res.cloudinary.com/dtrc2uihp/image/upload/v1767286409/sznpfybb9faevneintmj.jpg"
            alt="Memory"
          />
          <p>20 !! </p>
          <p>I wish you a very very</p>
          <p>HAPPY BIRTHDAY ARSHIYA</p>
          <p>May this year all your wishes come true</p>
          <p>Always be Happy and Charming as you are....!</p>
        </div>

        <div className="polaroid" data-aos="zoom-in" data-aos-delay="400">
          <video
            className="polo"
            autoPlay
            muted
            loop
            playsInLine
            style={{
              pointerEvents: "none",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          >
            <source
              src="https://res.cloudinary.com/dtrc2uihp/video/upload/f_mp4/q_auto/gf0g0tmqldieekaun3jt.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <p>Aisa video muze bhi banana hai gf banva de!!.</p>
        </div>
      </div>
    </section>
  );
}
