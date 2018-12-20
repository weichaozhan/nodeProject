'use strict';

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const graphqlTest = new Schema({
    id: String,
    name: String,
    friends: [
        {
            id: String,
            name: String,
            sex: Number,
        }
    ]
}); 

export default mongoose.model('graphqlTest', graphqlTest);