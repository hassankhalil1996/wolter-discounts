import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="about-page">

      <div className="about-card">
        <img
          src="/hassan.jpg"
          alt="Hassan Khalil"
          className="profile-picture"
        />

        <div className="about-info">
          <span className="about-label">ABOUT ME</span>

          <h1>Hi, I'm Hassan Khalil</h1>

          <h3>Computer Engineer & Wolt Courier</h3>

          <p>
            I'm a Computer Engineer and Wolt courier, combining
            technology with real courier experience to build useful
            tools for the courier community.
          </p>

          <p>
            I created Courier Discounts to make it easier for couriers
            to discover discounts and special offers from local
            businesses.
          </p>
        </div>
      </div>

    </div>
  );
}

export default AboutPage;