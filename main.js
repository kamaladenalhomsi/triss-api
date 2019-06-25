import express from 'express';
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';
import typeDefs from './schema/types/main';
import resolvers from './schema/resolvers/main';
import DBHandler from './handlers/dbHandler';
require('dotenv').config()
const PORT = process.env.APP_PORT || 3000;

const app = express()
const dbHandler = new DBHandler();
dbHandler.setUpConnection();
const schema = buildSchema(
  typeDefs
);

app.use('/', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))