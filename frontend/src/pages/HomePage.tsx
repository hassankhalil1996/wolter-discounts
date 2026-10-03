import "./HomePage.css";

type Props = {
  onNavigate: (page: string) => void;
};

function HomePage({ onNavigate }: Props) {
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

          <section className="discount-cta">
          <span className="discount-cta-label">הטבות לשליחים</span>

          <h2>ההנחות מחכות לכם</h2>

          <button
            className="discount-cta-button"
            onClick={() => onNavigate("discounts")}
          >
            מצאו הנחות
            <span>←</span>
          </button>
        </section>

      </section>






      <section className="info-section">


      </section>

    </div>
  );
}

export default HomePage;