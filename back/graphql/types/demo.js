import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLID
} from 'graphql';

export default new GraphQLObjectType({
    name: 'Demo',
    fields: {
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