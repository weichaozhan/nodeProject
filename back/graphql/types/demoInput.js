import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID
} from 'graphql';

export default new GraphQLInputObjectType({
    name: 'DemoInput',
    fields: {
        name: {
            type: GraphQLString,
        },
        sex: {
            type: GraphQLString,
        },
    },
});