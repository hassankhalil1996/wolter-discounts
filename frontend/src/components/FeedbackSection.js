import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { getFeedback, addFeedback, } from "../services/feedbackService";
function FeedbackSection() {
    const [feedback, setFeedback] = useState([]);
    const [comment, setComment] = useState("");
    useEffect(() => {
        async function loadFeedback() {
            try {
                const data = await getFeedback();
                setFeedback(data);
            }
            catch (error) {
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
        }
        catch (error) {
            console.error(error);
        }
    }
    return (_jsxs("div", { className: "feedback-section", children: [_jsx("h2", { children: "Feedback" }), _jsx("textarea", { value: comment, onChange: (event) => setComment(event.target.value), placeholder: "Write your feedback..." }), _jsx("button", { onClick: handleSubmit, children: "Add Comment" }), _jsx("div", { className: "feedback-list", children: feedback.map((item) => (_jsx("div", { className: "feedback-card", children: _jsx("p", { children: item.comment }) }, item.id))) })] }));
}
export default FeedbackSection;
//# sourceMappingURL=FeedbackSection.js.map