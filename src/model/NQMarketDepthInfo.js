const { Int32 } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NQMarketDepthInfo = new Schema(
{

    name: {type: String},
    edad: {type: String}
  /*  Price: {type: String},
    OriginPrice: {type: String},
    Volume: {type: String},
    Time: {type: Date},
    Direction: {type: String},
    DataType: {type: String},
    OpenInterest: {type: String}*/

});

module.exports = mongoose.model('ejemplo', NQMarketDepthInfo);
