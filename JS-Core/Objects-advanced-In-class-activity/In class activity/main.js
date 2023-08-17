import { books } from "./book-data.js";
import { bookGenre } from "./book-data.js";

const pagesInRange = function (books, min, max) {
    const filteredByPages = books.filter(book => (book.pages >= min && book.pages <= max));
    return filteredByPages;
}

//console.log(pagesInRange(books, 100, 300));

const booksByGenre = function (books, genre) {
    const check = bookGenre[genre];

    const filteredByGenre = books.filter(book => {
        if (book.genre === check)

            return book;
    });

    return filteredByGenre;
}

// console.log(booksByGenre(books, 'Mainstream'));


const booksByGenreAndAuthor = function (books, genre, author) {
    const checkGenre = bookGenre[genre];

    const filterByGenreAuthor = books.filter(book => {
        if (book.genre === checkGenre
            && book.author === author)

            return book;
    });

    return filterByGenreAuthor;
}


// console.log(booksByGenreAndAuthor(books, 'Sci-Fi', 'Frank Herbert'));

const booksByGenreOrAuthor = function (books, genre, author) {
    const checkGenre = bookGenre[genre];

    const filterByGenreOrAuthor = books.filter(book => {
        if (book.genre === checkGenre
            || book.author === author)

            return book;
    });

    return filterByGenreOrAuthor;
}

// console.log(booksByGenreOrAuthor(books, 'Sci-Fi', 'David Brin'));

const avgRating = function (arr) {
    const avg = arr.reduce((acc, el) => acc + el);
    return avg / arr.length;
}

const booksByAverageRating = function (books, minRating, maxRating) {
    const filterByRating = books.filter(book => avgRating(book.ratings) >= minRating && avgRating(book.ratings) <= maxRating);
    return filterByRating;
}

// console.log(booksByAverageRating(books, 4, 5));

const bookWithBestRating = function (books) {
    const findHighestRating = books.reduce((acc, book) => avgRating(acc.ratings) > avgRating(book.ratings) ? acc = acc : acc = book, books[0]);
    return findHighestRating;
}

// console.log(bookWithBestRating(books));

const authorsByGenre = function (books, genre) {
    const check = bookGenre[genre];
    const authorArr = [];
    books.filter(book => book.genre === check ? authorArr.push(book.author) : false);
    return authorArr;
}

// console.log(authorsByGenre(books, 'Sci-Fi'));

const authorsWithGenres = function (books) {
    const authorArr = books.reduce((acc, el) => {
        acc.includes(el.author) ? false : acc.push(el.author);
        return acc;
    }, []);
    
    const objWithAuthor = authorArr.map(el => el = { author: el });

    const allGenres = Object.keys(bookGenre);

    const objWithAuthorAndGenre = objWithAuthor.map(el => {
        const genreArr = books.reduce((acc, innerEl) => {
            if (el.author === innerEl.author && !acc.includes(allGenres[innerEl.genre - 1])) {
                acc.push(allGenres[innerEl.genre - 1]);
                return acc;
            } else {
                return acc;
            }

        }, []);
        el.genres = genreArr;
        return el;
    })
    return objWithAuthorAndGenre;
}

// console.log(authorsWithGenres(books));

const authorsWithSoleGenres = function (books) {
    const authorArr = books.reduce((acc, el) => {
        acc.includes(el.author) ? false : acc.push(el.author);
        return acc;
    }, []);

    const filteredAuthors = authorArr.filter(el => {
        const authorGenres = books.reduce((acc, innerEl) => {
            if (innerEl.author === el && !acc.includes(innerEl.genre)) {
                acc.push(innerEl.genre)
            }
            return acc;
        } ,[]);
        if (authorGenres.length > 1) {
            return false;
        }
        return el;
    });

    return filteredAuthors;
}

// console.log(authorsWithSoleGenres(books));