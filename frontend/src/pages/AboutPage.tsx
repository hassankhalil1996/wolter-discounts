import "./AboutPage.css";
import { FaWhatsapp } from "react-icons/fa";

import FeedbackSection from "../components/FeedbackSection";

function AboutPage() {
  return (
    <div className="about-page" dir="rtl">
      <div className="about-card">
        <img
          src="/profile_photo.jpeg"
          alt="חסן חליל"
          className="profile-picture"
        />

        <div className="about-info">
          <span className="about-label">קצת עליי</span>

          <h1>היי, אני חסן</h1>

          <h3>מפתח האתר - שליח וולט פעיל</h3>

          <p>
            בתור שליח וולט, החלטתי לרכז במקום אחד עסקים שמוכנים
            לתת הנחות והטבות מיוחדות לוולטרים.
          </p>

          <p>
            המטרה פשוטה – לעזור לנו כשליחים לחסוך כסף, להכיר מקומות
            חדשים ולמצוא בקלות עסקים שמפרגנים לקהילת השליחים.
          </p>

          <p>
            וזה משתלם גם לעסקים – קהילת השליחים גדולה, פעילה ונמצאת
            כל יום ברחובות. עסק שמצטרף מקבל חשיפה לקהילה של לקוחות
            פוטנציאליים שיכולים לעצור, לקנות ולחזור שוב.
          </p>

          <p>
            <strong>בעלי עסק ורוצים להצטרף?</strong>
            <br />
            מכירים מקום שכדאי להוסיף? יש לכם רעיון לשיפור?
            <br />
            שלחו לי הודעה בוואטסאפ.
            או השאירו משוב.
          </p>

          <div className="contact-section">
          <a
            className="whatsapp-button"
            href="https://wa.me/972506990205"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="whatsapp-icon" />
            דברו איתי בוואטסאפ
          </a>

          <a className="phone-number" href="tel:0506990205">
            050-699-0205
          </a>
        </div>
        </div>
      </div>

      <FeedbackSection />
    </div>
  );
}

export default AboutPage;