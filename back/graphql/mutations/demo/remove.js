import {
    GraphQLNonNull,
    GraphQLID,
    GraphQLString,
} from 'graphql';

import DemoModel from '../../../models/graphqlDemo';

export default {
    type: GraphQLString,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLID),
        },
    },
    async resolve(root, params, options) {
        try {
            await DemoModel.find({
                _id: params._id,
            })
                .remove()
                .exec();
        } catch(err) {
            return new Error(err);
        }

        return 'Remove Success!';
    },
};