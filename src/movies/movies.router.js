const router = require("express").Router();
const controller = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

const reviewsRouter = require("../reviews/reviews.router");
const theatersRouter = require("../theaters/theaters.router");

// movies
router.route("/").get(controller.list).all(methodNotAllowed);
router.route("/:movieId([0-9]+)").get(controller.read).all(methodNotAllowed);

// theaters
router.use(
  "/:movieId([0-9]+)/theaters",
  controller.movieExists,
  theatersRouter
);

// reviews
router.use("/:movieId([0-9]+)/reviews", controller.movieExists, reviewsRouter);

module.exports = router;