import React from 'react';
import { getAuthorsQuery, addBookMutation } from '../services/BooksService';
import { graphql } from '@apollo/client/react/hoc';
import { flowRight as compose } from 'lodash';

class AddBook extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            genre: '',
            authorId: ''
        };
    }

    displayAuthorsList() {
        const { loading, error, authors } = this.props.getAuthors;

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

    submitForm(e) {
        e.preventDefault();
        const { name, genre, authorId } = this.state;
        this.props.addBook({
            variables: { name, genre, authorId }
        });
    }

    render() {
        return (
            <form id="add-book" onSubmit={this.submitForm.bind(this)}>
                <div className="field">
                    <label>Book name:</label>
                    <input type="text" onChange={(e) => this.setState({ name: e.target.value })} />
                </div>

                <div className="field">
                    <label>Genre:</label>
                    <input type="text" onChange={(e) => this.setState({ genre: e.target.value })} />
                </div>

                <div className="field">
                    <label>Author:</label>
                    <select onChange={(e) => this.setState({ authorId: e.target.value })}>
                        <option>Select author</option>
                        {this.displayAuthorsList()}
                    </select>
                </div>

                <button>+</button>
            </form>
        );
    }
}

export default compose(
    graphql(getAuthorsQuery, { name: 'getAuthors' }),
    graphql(addBookMutation, { name: 'addBook' })
)(AddBook);
