import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-page" dir="rtl">

      <section className="hero-section">
        <span className="hero-badge">הטבות לקהילת הוולטרים</span>

        <h1>
          ההנחות שלכם.
          <br />
          <span>במקום אחד.</span>
        </h1>

        <p className="hero-description">
          האתר מרכז מסעדות ובתי עסק בתל אביב שמציעים הנחות
          והטבות מיוחדות לקהילת שליחי Wolt ברכישת אוכל ומוצרים.
        </p>

        <p className="hero-secondary">
          בחרו את האזור שבו אתם עובדים וגלו אילו הטבות זמינות
          בקרבתכם.
        </p>
      </section>

      <section className="info-section">

        <div className="info-card">
          <div className="info-icon">%</div>
          <h3>הנחות מיוחדות</h3>
          <p>
            הטבות והנחות המיועדות במיוחד לשליחי Wolt.
          </p>
        </div>

        <div className="info-card">
          <div className="info-icon">⌖</div>
          <h3>לפי אזור</h3>
          <p>
            מצאו בקלות עסקים שמציעים הטבות באזור שבו אתם עובדים.
          </p>
        </div>

        <div className="info-card">
          <div className="info-icon">✓</div>
          <h3>פשוט ומהיר</h3>
          <p>
            בוחרים אזור, מוצאים עסק ונהנים מההטבה.
          </p>
        </div>

      </section>

    </div>
  );
}

export default HomePage;