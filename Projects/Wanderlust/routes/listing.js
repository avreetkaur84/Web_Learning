const express = require("express");
const router = express.Router();
const wrapAsync= require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer  = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});


router
    .route("/")
    .get(wrapAsync(listingController.index))        //index route
    .post(isLoggedIn, validateListing, wrapAsync(listingController.createListing))     //create route
    // .post(upload.single('listing[image]'), (req, res) => {
    //     res.send(req.file);
    // });

// New Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

router
    .route("/:id")
    .get(wrapAsync(listingController.showListing))      //show route
    .put(isLoggedIn, isOwner, validateListing, wrapAsync(listingController.updateListing))      // Update Route
    .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing))       // Delete route

    
// Edit route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));

module.exports = router;