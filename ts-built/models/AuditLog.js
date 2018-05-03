"use strict";
var mongoose_1 = require("mongoose");
var AuditLogSchema = new mongoose_1.Schema({
    Field_Name: String,
    Previous_Value: String,
    New_Value: String,
    Timestamp: Date,
    User_Id: Number,
    User_Name: String,
    Object_Type: String,
    Object_Id: Number,
    Details: String
});
var AuditLog = mongoose_1.model("AuditLog", AuditLogSchema);
module.exports = AuditLog;
