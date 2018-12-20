import {
    GraphQLList,
    GraphQLID,
    GraphQLString,
    GraphQLBoolean,
} from 'graphql';

import demoType from '../../types/demo';
import DemoModel from '../../../models/graphqlDemo';

export default {
    type: new GraphQLList(demoType),
    args: {
        id: {
            name: 'id',
            type: GraphQLID,
        },
        name: {
            name: 'name',
            type: GraphQLString,
        }
    },
    resolve(root, params, ctx, options) {
        return DemoModel
                    .find({
                        ...params,
                    })
                    .exec();
    },
};