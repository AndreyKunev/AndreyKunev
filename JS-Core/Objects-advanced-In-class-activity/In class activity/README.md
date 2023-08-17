<img src="https://webassets.telerikacademy.com/images/default-source/logos/telerik-academy.svg" alt="logo" width="300px" style="margin-top: 20px;"/>

## 1. Setup

No additional npm packages required, just create a couple of files and we are good to go.

## Task Practice working with complex objects

Using the book-data.js, implement the following functions.

1. define `pagesInRange(books, min, max)` that returns all books with pages in [min, max]
1. define `booksByGenre(books, genre)` that returns all books with the specified genre
1. define `booksByGenreAndAuthor(books, genre, author)` that returns all books with the genre AND author
1. define `booksByGenreOrAuthor(books, genre, author)` that returns all books with the genre OR author
1. define `booksByAverageRating(books, minRating, maxRating)` that returns all books with average rating in [minRating, maxRating]
1. define `bookWithBestRating(books)` that returns the book with the highest rating
1. define `authorsByGenre(books, genre)` that returns all authors that have books with the specified genre
1. define `authorsWithGenres(books)` that returns an array of { author: 'author name', genres: [] }
1. define `authorsWithSoleGenres(books)` that returns all the authors that have published in only one genre