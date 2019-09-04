const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

// Connect to cloud.mongodb.com
mongoose.connect('mongodb+srv://denis:my_super_password_123@cluster0-48jky.mongodb.net/graphql-tuts?retryWrites=true&w=majority', {useNewUrlParser: true});
mongoose.connection.once('open', () => {
  console.log('Connected to database...')
});

// GraphQL Middleware
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(4000, () => {
  console.log('Now listening for requests on port 4000');
});
