const express = require("express");
const linkRouter = express.Router();
const authorizeUser = require("../middleware/authorizeUser");
const {addLink, getAllLinks, deleteLink} = require("../controllers/linksController");

linkRouter.post("/", authorizeUser, addLink);
linkRouter.delete("/:linkId", authorizeUser, deleteLink);
linkRouter.get("/", authorizeUser, getAllLinks);

module.exports = linkRouter;