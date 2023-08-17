export const bookGenre = {
  'Sci-Fi': 1,
  'Fantasy': 2,
  'Thriller': 3,
  'Mainstream': 4,
};

export const books = [
  {
    id: 1,
    title: 'Dune',
    pages: 500,
    genre: bookGenre['Sci-Fi'],
    author: 'Frank Herbert',
    ratings: [5, 5, 4, 5],
  },
  {
    id: 2,
    title: 'Startide Rising',
    pages: 450,
    genre: bookGenre['Sci-Fi'],
    author: 'David Brin',
    ratings: [5, 4, 3, 1],
  },
  {
    id: 3,
    title: 'Something',
    pages: 200,
    genre: bookGenre.Mainstream,
    author: 'Mark Twain',
    ratings: [2, 2, 2, 3],
  },
  {
    id: 4,
    title: 'Transparent Society',
    pages: 450,
    genre: bookGenre.Mainstream,
    author: 'David Brin',
    ratings: [5, 5],
  },
];
