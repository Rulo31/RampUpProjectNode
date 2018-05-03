import { Document, Schema, Model, model } from 'mongoose';
import IBear = require('../models/IBear');

interface IBearModel extends IBear, Document { }

var BearSchema: Schema = new Schema({
    name: String
  });

var Bear = model<IBearModel>("Bear", BearSchema);

export = Bear;