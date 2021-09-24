const { Schema, model } = require("mongoose");

//form schema for taking inputs from the form and storing in the form of database
const formSchema = new Schema(
  {
    numberOfWords: { type: String, require: true },
    email: { type: String, require: true },
    typeOfDuration: { type: String, require: true },
    discount: { type: String, require: true },
    name: { type: String, require: true },
    isComplement: { type: Boolean, require: true },
    fieldOfText: { type: Boolean, require: true },
    packageType: { type: Boolean, require: true },
    language1: { type: String, require: true },
    language2: { type: String, require: true },
    language3: { type: String, require: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("form", formSchema);
