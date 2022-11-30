import mongoose from "mongoose";

mongoose.Promise = global.Promise;
const { ObjectId } = mongoose.Types;
const { Schema } = mongoose;

function extendSchema(schema, definition) {
  return new mongoose.Schema(
    { ...schema.obj, ...definition.obj },
    {
      ...schema.options,
      ...definition.options,
    }
  );
}
// Export
export { mongoose, ObjectId, Schema, extendSchema };
