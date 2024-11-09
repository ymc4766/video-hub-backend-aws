import { Request, Response, NextFunction } from "express";
import { JsonWebTokenError } from "jsonwebtoken";

export const errorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (error instanceof JsonWebTokenError) {
    res.status(401).json({ error: error.message });
    return;
  }
  res.status(500).json({ error: error.message });
};
