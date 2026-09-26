"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAdmin = requireAdmin;
function requireAdmin(req, res, next) {
    const apiKey = req.header("x-admin-key");
    if (!apiKey || apiKey !== process.env.ADMIN_API_KEY) {
        return res.status(401).json({
            error: "Unauthorized",
        });
    }
    next();
}
