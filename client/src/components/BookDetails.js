import React from 'react';
import { getBookQuery } from '../services/BooksService';
import { graphql } from '@apollo/client/react/hoc';

class BookDetails extends React.Component {
    render() {
        const { loading, error, book } = this.props.data;

        if (!book) {
            return <div>No book selected...</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Unable to load book data</div>;
        }

        return (
            <div className="book-details">
                <h2>{book.name}</h2>
                <p>{book.genre}</p>
                <p>{book.author.name}</p>
                <p>All books by this author</p>
                <ul className="authors-books">
                    {book.author.books.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default graphql(getBookQuery, {
    options: (props) => ({
        variables: {
            id: props.bookId
        }
    })
})(BookDetails);
