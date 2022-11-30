import { mongoose, Schema, extendSchema } from "../../utils/mongoose";
import { BaseSchema } from "../common/baseModel";

const schema = new Schema(
  {
    settingId: {
      type: String,
      unique: true,
      default: "1",
    },
    logo: String,
    company: {
      name: String,
      phone: String,
      email: String,
      address: String,
    },
    senderEmail: String,
    senderDomain: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const SystemSettingSchema = extendSchema(schema, BaseSchema);

export default mongoose.model(
  "Settings",
  SystemSettingSchema,
  "system_settings"
);
