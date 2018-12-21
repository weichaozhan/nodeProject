/**
 * @author weichaozhan
 * @description graphql 示例 
 */
import {
    httpGraphql,
} from '@/public/http';

/**
 * @description 添加
 */
const addDemoAPI = (args) => {
    return httpGraphql(`
        mutation demo(
            $data: DemoInput!
        ) {
            addDemo(data: $data) {
                code
                msg
            }
        }
    `, {
        data: {...args},
  });
};

/**
 * @description 获取所有demo
 */
const getDemosAPI = () => {
    return httpGraphql(`
        query demo {
            demos {
                id
                name
                sex
            }
        }
  `);
};

/**
 * @description 删除
 */
const removeDemoAPI = (id) => {
    return httpGraphql(`
        mutation demo ($id: ID!) {
            removeDemo(id: $id) {
                code
                msg
            }
        }
    `, {
        id: id,
    });
};


export {
    addDemoAPI,
    getDemosAPI,
    removeDemoAPI,
}
