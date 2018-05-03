"use strict";
var mongoose_1 = require("mongoose");
var BearSchema = new mongoose_1.Schema({
    name: String
});
var Bear = mongoose_1.model("Bear", BearSchema);
module.exports = Bear;
