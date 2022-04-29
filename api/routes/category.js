const express = require("express");
const router = express.Router();
const cors = require('../helper/cors');
const { getCategories, save, deleteCategory} = require('../services/categoryHandler');

router.get("/", cors, async function (req, res, next) {
  const { query } = req;
  const categories = await getCategories(query);
  res.status(200).json(categories);
});

router.post("/", cors, async function (req, res, next) {
    try {
        const categories = await save(req.body);
        res.status(200).json(categories);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.delete("/:id", cors, async function (req, res, next) {
    try {
        const categories = await deleteCategory(req.params.id);
        res.status(200).json(categories);
    } catch (error) {
        console.log("error: ", error);
        res.status(400).send(error);
    }
});

module.exports = router;