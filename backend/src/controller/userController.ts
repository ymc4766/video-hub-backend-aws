import { Request, RequestHandler } from "express";
import UserModal from "../models/userModal";
import { sendError } from "../utils/sendError";
import crypto from "crypto";

// interface RegisterReq extends Request {
//   body: {
//     email: string;
//     name: String;
//     password: string;
//   };
// }

export const registerUser: RequestHandler = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    const randomToken = crypto.randomBytes(36).toString("hex");
    const existUser = await UserModal.findOne({ email });
    if (existUser) {
      //send err
      return sendError({
        res,
        message: "user already exist",
        status: 422,
      });
    }

    const newUser = await UserModal.create({
      name,
      email,
      password,
      token: randomToken,
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.log(`error accured ${error}`);
    return sendError({ res, message: "internal server err", status: 500 });
  }
};
