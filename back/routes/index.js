/**
 * @description 路由入口
 * @author weichaozhan
 */
'use strict';

import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';

import html from './html';

import admin from './admin';
import fileAction from './fileAction';
import graphTest from './graphqlTest';

// 使用 GraphQL Schema Language 创建一个 schema
var schema = buildSchema(`
  input MessageInput {
    content: String
    author: String
  }
  type Message {
    id: ID!
    content: String
    author: String
  }
  type Query {
	getMessage(id: ID!): Message,
  }
  type Mutation {
    createMessage(input: MessageInput): Message
    updateMessage(id: ID!, input: MessageInput): Message
  }
`);

// If Message had any complex fields, we'd put them on this object.
class Message {
    constructor(id, {content, author}) {
        this.id = id;
        this.content = content;
        this.author = author;
    }
}

// Maps username to content
var fakeDatabase = {
	1: {
		content: 'String',
		author: 'String',
	},
	2: {
		content: 'String',
		author: 'String',
	}
};

var root = {
    getMessage: function ({id}) {
        if (!fakeDatabase[id]) {
            throw new Error('no message exists with id ' + id);
        }
        return new Message(id, fakeDatabase[id]);
    },
    createMessage: function ({input}) {
        // Create a random id for our "database".
        var id = require('crypto').randomBytes(10).toString('hex');
console.log(id)
        fakeDatabase[id] = input;
        return new Message(id, input);
    },
    updateMessage: function ({id, input}) {
        if (!fakeDatabase[id]) {
            throw new Error('no message exists with id ' + id);
        }
        // This replaces all old data, but some apps might want partial update.
        fakeDatabase[id] = input;
        return new Message(id, input);
    },
};

export default app => {
	// html 静态文件，不以 /api 开头的路由
	app.use(/^(?!(\/api|\/graphql))/, html);

	//接口 

	app.use('/graphql', graphqlHTTP({
		schema: schema,
		rootValue: root,
		graphiql: true,
	}));
	// 用户
	app.use('/api/admin', admin);
	// 文件上传下载
	app.use('/api/fileAction', fileAction);
}
