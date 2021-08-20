const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
    'mongodb+srv://jeff:RjXFc4R7VUr4D50w@cluster0.aumx1.mongodb.net/gql-ninja?retryWrites=true&w=majority'
);
mongoose.connection.once('open', () => {
    console.log('conneted to database');
});

// bind express with graphql
app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: true
    })
);

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});
