import React from 'react';
import { ApolloClient, ApolloProvider } from '@apollo/client';

import BookList from './components/Booklist';

// apollo client setup
const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql'
});

function App() {
    return (
        <ApolloProvider client={client}>
            <div className="main">
                <h1>Random reading list</h1>
                <BookList />
            </div>
        </ApolloProvider>
    );
}

export default App;
