/**
 * @author weichaozhan
 * @description 添加
 */

import {
    GraphQLNonNull,
} from 'graphql';

import {ERR_CODE} from '../../../prototype/constant';

import demoInputType from '../../types/demoInput';
import ResMsgType from '../../types/resMsg';

import DemoModel from '../../../models/graphqlDemo';

export default {
    type: ResMsgType,
    args: {
        data: {
            name: 'data',
            type: new GraphQLNonNull(demoInputType),
        },
    },
    async resolve(root, params, options) {
        const demoModel = new DemoModel(params.data);
        const resMsg = {
            code: ERR_CODE.SUCCESS,
            msg: 'Add Success!',
        };

        // 设置 id 为 mongoDB 生成的 _id
        demoModel.id = demoModel._id.toString();
        try {
            await new Promise((resolve, reject) => {
                demoModel.save((err, product) => {
                    if (err) {
                        console.log(err);

                        resMsg.code = ERR_CODE.TOKEN_ERR;
                        resMsg.msg = 'Server Error';
                        reject();
                    } else {
                        resolve();
                    }
                });
            });
        } catch(err) {
            return new Error(err);
        }
        return resMsg;
    },
};
