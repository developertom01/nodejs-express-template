import { Model, Schema, model } from "mongoose";
import { v4 as uuidv4 } from "uuid";

export interface IUser {
  uid: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Virtual {
  fullName: string;
}
interface IUserMethods {
  authenticate(password: string): boolean;
}
const userSchema = new Schema<
  IUser,
  Model<IUser, {}, IUserMethods, Virtual>,
  IUserMethods
>(
  {
    email: {
      type: Schema.Types.String,
      required: true,
      trim: true,
      unique: true,
      index: true,
    },
    firstName: {
      required: true,
      trim: true,
      type: Schema.Types.String,
    },
    uid: {
      required: true,
      type: Schema.Types.String,
      default: () => uuidv4(),
    },
    lastName: {
      required: true,
      trim: true,
      type: Schema.Types.String,
    },
    password: {
      required: true,
      type: Schema.Types.String,
    },
  },
  { id: true, timestamps: true }
);

userSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

userSchema.method("authenticate", function authenticate(password: string) {
  return this.password === password;
});

export const UserModel = model("User", userSchema, "users");
