import { useEffect, useState } from "react";

import type { Feedback } from "../types/Feedback";
import {
  getFeedback,
  addFeedback,
} from "../services/feedbackService";

function FeedbackSection() {
  const [feedback, setFeedback] = useState<Feedback[]>([]);
  const [comment, setComment] = useState("");

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
      const newFeedback = await addFeedback(comment);

      setFeedback((currentFeedback) => [
        newFeedback,
        ...currentFeedback,
      ]);

      setComment("");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="feedback-section">
      <h2>Feedback</h2>

      <textarea
        value={comment}
        onChange={(event) => setComment(event.target.value)}
        placeholder="Write your feedback..."
      />

      <button onClick={handleSubmit}>
        Add Comment
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