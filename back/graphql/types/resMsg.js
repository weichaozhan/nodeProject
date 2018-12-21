import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
} from 'graphql';

export default new GraphQLObjectType({
    name: 'ResMsg',
    fields: {
        code: {
            type: GraphQLInt,
        },
        msg: {
            type: GraphQLString,
        }
    }
});