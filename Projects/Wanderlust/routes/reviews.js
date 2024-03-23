const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync= require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");

// POST Review Route
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.createReview));

// Delete Review Route
//  How reviews are deleted from the Listing database, in second line only id of review is fetched but how it is deleted.
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, validateReview, wrapAsync(reviewController.destroyReview));

module.exports = router;