import { Schema } from "../../utils/mongoose";

const BaseSchema = new Schema(
  {
    createdBy: {
      _id: Schema.Types.ObjectId,
      username: String,
    },
    updatedBy: {
      _id: Schema.Types.ObjectId,
      username: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export { BaseSchema };
