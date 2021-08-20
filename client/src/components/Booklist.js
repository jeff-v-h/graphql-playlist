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
        console.log(this.props);
        return (
            <ul className="booklist">
                <li>book name</li>
            </ul>
        );
    }
}

export default graphql(getBooksQuery)(BookList);
