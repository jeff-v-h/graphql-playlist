import React from 'react';
import { getBooksQuery } from '../services/BooksService';
import { graphql } from '@apollo/client/react/hoc';
import BookDetails from './BookDetails';

class BookList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: null
        };
    }
    render() {
        const { loading, error, books } = this.props.data;

        if (loading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Unable to load book list</div>;
        }

        return (
            <div>
                <ul className="book-list">
                    {books.map((book) => (
                        <li key={book.id} onClick={() => this.setState({ selected: book.id })}>
                            {book.name}
                        </li>
                    ))}
                </ul>
                <BookDetails bookId={this.state.selected} />
            </div>
        );
    }
}

export default graphql(getBooksQuery)(BookList);
