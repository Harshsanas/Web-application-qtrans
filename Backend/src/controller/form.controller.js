const express = require("express");

const router = express.Router();

const Forms = require("../model/form.model");

router.get("/form", async (req, res) => {
  try {
    const forms = await Forms.find({}).populate("form").lean().exec();
    res.status(200).json({ forms });
    // console.log(res)
  } catch (err) {
    res.status(500).json({ status: "failed", err: err.message });
  }
});

// to add new forms
router.post("/form", async (req, res) => {
  const {
    id,
    numberOfWords,
    typeOfDuration,
    discount,
    name,
    isComplement,
    fieldOfText,
    packageType,
    email,
    language1,
    language2,
    language3,
  } = req.params;
  // console.log(id, url, name, content);
  try {
    const newforms = await Forms.create(req.body);
    res.status(201).json({ newforms });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

module.exports = router;
