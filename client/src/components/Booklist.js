import React from 'react';
import { gql } from '@apollo/client';
import { graphql } from '@apollo/client/react/hoc';

const getBooksQuery = gql`
    query GetBooks {
        books {
            name
            id
        }
    }
`;

class BookList extends React.Component {
    render() {
        const { loading, error, books } = this.props.data;

        if (loading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Unable to load book list</div>;
        }

        return (
            <ul className="book-list">
                {books.map((book) => (
                    <li key={book.id}>{book.name}</li>
                ))}
            </ul>
        );
    }
}

export default graphql(getBooksQuery)(BookList);
