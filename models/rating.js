const mongoose = require("mongoose");
const Schema = mongoose.Schema
const RatingSchema = new Schema({
    siteName: {type: String},
    siteCountry: {type: String},
    siteRating: [{
        siteRep: {type: Number},
        siteLoc: {type: Number},
        siteFacilities: {type: Number},
        siteSocial: {type: Number}
    }]
});

const Rating = mongoose.model("Rating", RatingSchema);

module.exports = Rating;