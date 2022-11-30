import mongoosePaginate from "mongoose-paginate-v2";
import { mongoose, Schema } from "../../utils/mongoose";
import methods from "./method";
import statics from "./static";
import config from "./config";
import hooks from "./hook";

const SiteAdminSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      max: 40,
    },
    password: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: config.ROLES,
    },
    email: {
      type: String,
      unique: true,
      sparse: true,
    },
    avatar: String,
    gender: {
      type: String,
      enum: config.listGender,
    },
    status: {
      type: Number,
      enum: config.listStatus,
      default: config.status.active,
    },
    blocked: {
      type: Number,
      default: 0,
    },
    lastlogin: Date,
    createdBy: {
      _id: Schema.Types.ObjectId,
      username: String,
    },
    updatedBy: {
      _id: Schema.Types.ObjectId,
      username: String,
    },
    timeVersion: Number,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

SiteAdminSchema.index({ username: 1 });

SiteAdminSchema.statics = statics;

SiteAdminSchema.methods = methods;

SiteAdminSchema.pre("save", function (next) {
  hooks.preSaveHook(this, next);
});

SiteAdminSchema.plugin(mongoosePaginate);

export default mongoose.model("SiteAdmin", SiteAdminSchema, "admins");
