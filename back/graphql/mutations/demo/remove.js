import {
    GraphQLNonNull,
    GraphQLID,
} from 'graphql';

import DemoModel from '../../../models/graphqlDemo';
import ResMsgType from '../../types/resMsg';

export default {
    type: ResMsgType,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLID),
        },
    },
    async resolve(root, params, options) {
        const resData = {
            msg: 'Remove Success!',
            code: 1000000,
        };

        try {
            await DemoModel
                .find({
                    _id: params._id,
                }, (err, data) => {
                    if (err) throw err;

                    if (data.length === 0) {
                        resData.code = 1000004;
                        resData.msg = `Not Found _id "${params._id}"`;
                    }
                })
                .remove()
                .exec();
        } catch(err) {
            return new Error(err);
        }

        return resData;
    },
};