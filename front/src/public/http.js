import {
    GraphQLClient,
} from 'graphql-request';

const httpGraphql = async (query, variables = {}) => {
    const endpoint = '/graphql'

    const graphQLClient = new GraphQLClient(endpoint, {
        headers: {
            authorization: 'Bearer MY_TOKEN',
        },
    })

    try {
        const data = await graphQLClient.request(query, JSON.stringify(variables, undefined, 2));

        return data;
    } catch(err) {
        console.log(err);
    }
};

export {
    httpGraphql,
};