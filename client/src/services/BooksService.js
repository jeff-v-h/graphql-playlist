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
export const addBookMutation = gql`
    mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
        addBook(name: $name, genre: $genre, authorId: $authorId) {
            name
            id
        }
    }
`;

const BooksService = {
    getBooksQuery,
    getAuthorsQuery,
    addBookMutation
};

export default BooksService;
