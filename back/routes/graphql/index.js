'use strict';

import graphqlHTTP from 'express-graphql';

import schema from '../../graphql';

const isDev = process.env.NODE_ENV === 'development';

export default graphqlHTTP({
    schema: schema,
    pretty: true,
    graphiql: isDev,
});