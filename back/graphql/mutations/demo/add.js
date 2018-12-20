/**
 * @author weichaozhan
 * @description 添加
 */

import {
    GraphQLNonNull,
    GraphQLString,    
} from 'graphql';

import demoInputType from '../../types/demoInput';
import DemoModel from '../../../models/graphqlDemo';

export default {
    type: GraphQLString,
    args: {
        data: {
            name: 'data',
            type: new GraphQLNonNull(demoInputType),
        },
    },
    async resolve(root, params, options) {
        const demoModel = new DemoModel(params.data);
        try {
            await demoModel.save();
        } catch(err) {
            return new Error(err);
        }
        return 'Add Success!';
    },
};
