import { useEffect, useState } from "react";

import type { Feedback } from "../types/Feedback";
import {
  getFeedback,
  addFeedback,
} from "../services/feedbackService";

function FeedbackSection() {
  const [feedback, setFeedback] = useState<Feedback[]>([]);
  const [comment, setComment] = useState("");
  const [isPublic, setIsPublic] = useState(true);

  useEffect(() => {
    async function loadFeedback() {
      try {
        const data = await getFeedback();
        setFeedback(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadFeedback();
  }, []);

  async function handleSubmit() {
    if (comment.trim() === "") {
      return;
    }

    try {
      const newFeedback = await addFeedback(comment, isPublic);

      // Add it to the visible list only if it is public
      if (isPublic) {
        setFeedback((currentFeedback) => [
          newFeedback,
          ...currentFeedback,
        ]);
      }

      setComment("");
      setIsPublic(true);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="feedback-section" dir="rtl">
      <h2>משוב</h2>

      <p>
        נשמח לשמוע את דעתכם, ההצעות שלכם ורעיונות לשיפור האתר.
      </p>

      <textarea
        value={comment}
        onChange={(event) => setComment(event.target.value)}
        placeholder="כתבו כאן את המשוב שלכם..."
      />

      <div className="feedback-visibility">
        <label>
          <input
            type="radio"
            name="visibility"
            checked={isPublic}
            onChange={() => setIsPublic(true)}
          />
          משוב ציבורי
        </label>

        <label>
          <input
            type="radio"
            name="visibility"
            checked={!isPublic}
            onChange={() => setIsPublic(false)}
          />
          משוב פרטי
        </label>
      </div>

      <p className="feedback-note">
        משוב ציבורי יוצג באתר. משוב פרטי יהיה גלוי רק למנהל האתר.
      </p>

      <button onClick={handleSubmit}>
        שליחת משוב
      </button>

      <div className="feedback-list">
        {feedback.map((item) => (
          <div className="feedback-card" key={item.id}>
            <p>{item.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeedbackSection;