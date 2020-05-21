const mongoose = require("mongoose");
const Schema = mongoose.Schema
const RatingSchema = new Schema({
    siteName: {type: String},
    siteLoc: {type: String},
    siteRating: {
        reputation: {type: Number},
        location: {type: Number},
        facilities: {type: Number},
        social: {type: Number}
    }
});

const Rating = mongoose.model("Rating", RatingSchema);

module.exports = Rating;