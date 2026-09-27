import type { Request, Response, NextFunction } from "express";

export function requireAdmin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const apiKey = req.header("x-admin-key");

  console.log("Key received:", !!apiKey);
  console.log("ADMIN_API_KEY loaded:", !!process.env.ADMIN_API_KEY);
  console.log(
    "Keys match:",
    apiKey === process.env.ADMIN_API_KEY
  );

  if (!apiKey || apiKey !== process.env.ADMIN_API_KEY) {
    return res.status(401).json({
      error: "Unauthorized",
    });
  }

  next();
}