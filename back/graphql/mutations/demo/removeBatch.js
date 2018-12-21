import {
    GraphQLNonNull,
    GraphQLID,
    GraphQLList,
    GraphQLString,
} from 'graphql';

import DemoModel from '../../../models/graphqlDemo';
// import ResMsg from '../../types/resMsg';
// import DemoType from '../../types/demo';

export default {
    type: GraphQLString,
    args: {
        ids: {
            type: new GraphQLList(new GraphQLNonNull(GraphQLID)),
        },
    },
    async resolve(root, params, options) {
        await DemoModel
                    .find({
                        _id: {
                            $in: params.ids,
                        }
                    })
                    .remove()
                    .exec();
        return 'remove batch success!';
    }
};