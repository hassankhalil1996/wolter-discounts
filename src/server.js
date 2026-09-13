"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const client_2 = require("@prisma/client");
const prisma = new client_2.PrismaClient();
app.get("/", (req, res) => {
    res.json({
        message: "Courier Discounts API is running",
    });
});
app.get("/businesses", async (req, res) => {
    const businesses = await prisma.business.findMany();
    res.json(businesses);
});
app.get("/businesses/:id", async (req, res) => {
    const id = Number(req.params.id);
    const business = await prisma.business.findUnique({
        where: {
            id: id,
        },
    });
    if (!business) {
        return res.status(404).json({
            message: "Business not found",
        });
    }
    res.json(business);
});
app.post("/businesses", async (req, res) => {
    const { name, city, discount, region } = req.body;
    const newBusiness = await prisma.business.create({
        data: {
            name,
            city,
            discount,
            region,
        },
    });
    res.status(201).json(newBusiness);
});
app.put("/businesses/:id", async (req, res) => {
    const id = Number(req.params.id);
    const { name, city, discount, region } = req.body;
    try {
        const updatedBusiness = await prisma.business.update({
            where: {
                id: id,
            },
            data: {
                name,
                city,
                discount,
                region,
            },
        });
        res.json(updatedBusiness);
    }
    catch {
        res.status(404).json({
            message: "Business not found",
        });
    }
});
app.delete("/businesses/:id", async (req, res) => {
    const id = Number(req.params.id);
    try {
        const deletedBusiness = await prisma.business.delete({
            where: {
                id: id,
            },
        });
        res.json(deletedBusiness);
    }
    catch {
        res.status(404).json({
            message: "Business not found",
        });
    }
});
app.get("/businesses/region/:region", async (req, res) => {
    const region = req.params.region.toUpperCase();
    const businesses = await prisma.business.findMany({
        where: {
            region: region,
        },
    });
    res.json(businesses);
});
app.post("/feedback", async (req, res) => {
    const { comment } = req.body;
    if (!comment || comment.trim() === "") {
        return res.status(400).json({
            error: "Comment is required",
        });
    }
    const feedback = await prisma.feedback.create({
        data: {
            comment: comment.trim(),
        },
    });
    res.status(201).json(feedback);
});
app.get("/feedback", async (req, res) => {
    const feedback = await prisma.feedback.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
    res.json(feedback);
});
// to remove
app.delete("/feedback/:id", async (req, res) => {
    const id = Number(req.params.id);
    try {
        const deletedFeedback = await prisma.feedback.delete({
            where: {
                id: id,
            },
        });
        res.json(deletedFeedback);
    }
    catch {
        res.status(404).json({
            message: "Feedback not found",
        });
    }
});
app.post("/users", async (req, res) => {
    const { name, email } = req.body;
    const newUser = await prisma.user.create({
        data: {
            name,
            email,
        },
    });
    res.status(201).json(newUser);
});
app.get("/users", async (req, res) => {
    const users = await prisma.user.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
    res.json(users);
});
app.post("/users/:id/visits", async (req, res) => {
    const userId = Number(req.params.id);
    const user = await prisma.user.findUnique({
        where: { id: userId },
    });
    if (!user) {
        return res.status(404).json({
            message: "User not found",
        });
    }
    const lastVisit = await prisma.visit.findFirst({
        where: { userId },
        orderBy: {
            visitedAt: "desc",
        },
    });
    const now = new Date();
    const thirtyMinutesMs = 30 * 60 * 1000;
    if (lastVisit) {
        const differenceMs = now.getTime() - lastVisit.visitedAt.getTime();
        if (differenceMs < thirtyMinutesMs) {
            return res.json({
                counted: false,
                message: "Visit already counted in the last 30 minutes",
            });
        }
    }
    const visit = await prisma.visit.create({
        data: {
            userId,
        },
    });
    res.status(201).json({
        counted: true,
        visit,
    });
});
app.get("/stats", async (req, res) => {
    const now = new Date();
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(now.getDate() - 7);
    const [totalUsers, totalBusinesses, totalFeedback, totalVisits, visitsToday, visitsLast7Days,] = await Promise.all([
        prisma.user.count(),
        prisma.business.count(),
        prisma.feedback.count(),
        prisma.visit.count(),
        prisma.visit.count({
            where: {
                visitedAt: {
                    gte: startOfToday,
                },
            },
        }),
        prisma.visit.count({
            where: {
                visitedAt: {
                    gte: sevenDaysAgo,
                },
            },
        }),
    ]);
    res.json({
        totalUsers,
        totalBusinesses,
        totalFeedback,
        totalVisits,
        visitsToday,
        visitsLast7Days,
    });
});
app.post("/hits", async (req, res) => {
    const hit = await prisma.serviceHit.create({
        data: {},
    });
    res.status(201).json(hit);
});
app.get("/hits/count", async (req, res) => {
    const totalHits = await prisma.serviceHit.count();
    res.json({
        totalHits,
    });
});
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
//# sourceMappingURL=server.js.map