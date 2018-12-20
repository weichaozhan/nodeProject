import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID
} from 'graphql';

export default new GraphQLInputObjectType({
    name: 'DemoInput',
    fields: {
        _id: {
            type: GraphQLID,
        },
        id: {
            type: GraphQLID,
        },
        name: {
            type: GraphQLString,
        },
        sex: {
            type: GraphQLString,
        },
    },
});