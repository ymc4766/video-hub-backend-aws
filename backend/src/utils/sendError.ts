import { Response } from "express";

type ErrorResType = {
  res: Response;
  message: string;
  status: number;
};

export const sendError = ({ res, message, status }: ErrorResType) => {
  res.status(status).json({ message });
};
