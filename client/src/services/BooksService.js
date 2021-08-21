import { gql } from '@apollo/client';

export const getBooksQuery = gql`
    query GetBooks {
        books {
            name
            id
        }
    }
`;
export const getAuthorsQuery = gql`
    query GetAuthors {
        authors {
            name
            id
        }
    }
`;

const BooksService = {
    getBooksQuery,
    getAuthorsQuery
};

export default BooksService;
