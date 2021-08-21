import React from 'react';
import { gql } from '@apollo/client';
import { graphql } from '@apollo/client/react/hoc';

const getAuthorsQuery = gql`
    query GetAuthors {
        authors {
            name
            id
        }
    }
`;

class AddBook extends React.Component {
    displayAuthorsList() {
        const { loading, error, authors } = this.props.data;

        if (loading) {
            return <option disabled>Loading...</option>;
        }

        if (error) {
            return <option disabled>Unable to load author list</option>;
        }

        return authors.map((author) => (
            <option key={author.id} value={author.id}>
                {author.name}
            </option>
        ));
    }
    render() {
        return (
            <form id="add-book">
                <div className="field">
                    <label>Book name:</label>
                    <input type="text" />
                </div>

                <div className="field">
                    <label>Genre:</label>
                    <input type="text" />
                </div>

                <div className="field">
                    <label>Author:</label>
                    <select>{this.displayAuthorsList()}</select>
                </div>

                <button>+</button>
            </form>
        );
    }
}

export default graphql(getAuthorsQuery)(AddBook);
