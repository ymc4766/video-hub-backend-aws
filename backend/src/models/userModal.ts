import { Document, model, Schema } from "mongoose";
import crypto from "crypto";

export interface Iuser extends Document {
  name: string;
  email: string;
  password: string;
  token?: string;
  dowloadCount: number;
  uploadCount: number;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    token: {
      type: String,
    },
    uploadCount: {
      type: Number,
      default: 0,
    },
    downloadCount: {
      // fixed typo here
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Pre-save hook to hash the password
userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();

  this.password = crypto
    .createHash("sha256")
    .update(this.password)
    .digest("hex");
  next();
});

const UserModal = model<Iuser>("User", userSchema);
export default UserModal;
