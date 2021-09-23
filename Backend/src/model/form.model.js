const { Schema, model } = require("mongoose");

//form schema for taking inputs from the form and storing in the form of database
const formSchema = new Schema(
  {
    numberOfDuration: { type: String, require: true },
    typeOfDuration: { type: String, require: true },
    discount: { type: String, require: true },
    name: { type: String, require: true },
    isComplement: { type: Boolean, require: true },
    fieldOfText: { type: Boolean, require: true },
    packageType: { type: Boolean, require: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("form", formSchema);
