import { Document, Schema, Model, model } from 'mongoose';
import IAuditLog = require('../models/IAuditLog');

interface IAuditLogModel extends IAuditLog, Document { }

var AuditLogSchema: Schema = new Schema({
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

var AuditLog = model<IAuditLogModel>("AuditLog", AuditLogSchema);

export = AuditLog;