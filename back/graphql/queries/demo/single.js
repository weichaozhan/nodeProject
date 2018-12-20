import {
    GraphQLNonNull,
    GraphQLID,
} from 'graphql';

import DemoModel from '../../../models/graphqlDemo';
import demoType from '../../types/demo';

export default {
    type: demoType,
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID),
        } 
    },
    resolve(root, params, ctx, options) {
        return DemoModel
                    .findById(params.id)
                    .exec();
    }
};