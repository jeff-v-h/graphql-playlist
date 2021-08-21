import React from 'react';
import { getBookQuery } from '../services/BooksService';
import { graphql } from '@apollo/client/react/hoc';

class BookDetails extends React.Component {
    render() {
        console.log(this.props.data);
        const { loading, error, book } = this.props.data;

        if (loading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Unable to load book data</div>;
        }

        return (
            <div className="book-details">
                <p>{book.name}</p>
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
