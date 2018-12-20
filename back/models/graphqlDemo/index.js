'use strict';

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const graphqlTest = new Schema({
    id: String,
    name: String,
    sex: String,
}); 

export default mongoose.model('graphqlTest', graphqlTest);