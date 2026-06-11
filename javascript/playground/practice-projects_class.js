// =========================================
// BOOK CLASS
// =========================================

class Book {
    static totalBooksCreated = 0;

    #isAvailable;

    constructor(title, author, isbn, yearPublished) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.yearPublished = new Date(yearPublished, 0, 1);

        this.#isAvailable = true;

        Book.totalBooksCreated++;
    }

    // Getter
    get isAvailable() {
        return this.#isAvailable;
    }

    // Setter
    set isAvailable(status) {
        this.#isAvailable = status;
    }

    getBookInfo() {
        return {
            title: this.title,
            author: this.author,
            isbn: this.isbn,
            yearPublished: this.yearPublished.getFullYear(),
            isAvailable: this.#isAvailable
        };
    }
}

// =========================================
// MEMBER CLASS
// =========================================

class Member {
    static totalMembers = 0;

    #borrowedBooks;

    constructor(name, memberId) {
        this.name = name;
        this.memberId = memberId;
        this.#borrowedBooks = [];

        Member.totalMembers++;
    }

    borrow(book) {
        try {
            if (!book.isAvailable) {
                throw new Error(`${book.title} is currently unavailable`);
            }

            book.isAvailable = false;

            this.#borrowedBooks.push(book);

            console.log(
                `${this.name} borrowed "${book.title}"`
            );
        } catch (error) {
            console.error(error.message);
        }
    }

    returnBook(book) {
        try {
            const index = this.#borrowedBooks.findIndex(
                borrowedBook => borrowedBook.isbn === book.isbn
            );

            if (index === -1) {
                throw new Error(
                    `${this.name} did not borrow "${book.title}"`
                );
            }

            this.#borrowedBooks.splice(index, 1);

            book.isAvailable = true;

            console.log(
                `${this.name} returned "${book.title}"`
            );

        } catch (error) {
            console.error(error.message);
        }
    }

    getBorrowedBooks() {
        return this.#borrowedBooks.map(book => book.title);
    }

    get borrowedBooks() {
        return this.#borrowedBooks;
    }
}

// =========================================
// LIBRARY CLASS
// =========================================

class Library {

    #books;
    #members;

    constructor(libraryName) {
        this.libraryName = libraryName;

        this.#books = [];
        this.#members = [];
    }

    addBook(book) {
        this.#books.push(book);

        console.log(`${book.title} added to library`);
    }

    removeBook(isbn) {

        const bookIndex = this.#books.findIndex(
            book => book.isbn === isbn
        );

        if (bookIndex === -1) {
            console.log("Book not found");
            return;
        }

        this.#books.splice(bookIndex, 1);

        console.log("Book removed successfully");
    }

    registerMember(member) {

        const existingMember = this.#members.find(
            m => m.memberId === member.memberId
        );

        if (existingMember) {
            console.log("Member already registered");
            return;
        }

        this.#members.push(member);

        console.log(`${member.name} registered`);
    }

    searchBook(title) {

        const result = this.#books.find(
            book =>
                book.title.toLowerCase() === title.toLowerCase()
        );

        return result || "Book not found";
    }
    

    getAvailableBooks() {
        return this.#books.filter(
            book => book.isAvailable
        );
    }

    getBorrowedBooks() {
        return this.#books.filter(
            book => !book.isAvailable
        );
    }

    generateLibraryReport() {

        const totalBooks = this.#books.length;

        const availableBooks =
            this.getAvailableBooks().length;

        const borrowedBooks =
            this.getBorrowedBooks().length;

        const totalMembers =
            this.#members.length;

        console.log(`
==================================
        LIBRARY REPORT
==================================
Library Name: ${this.libraryName}

Total Books: ${totalBooks}

Available Books: ${availableBooks}

Borrowed Books: ${borrowedBooks}

Registered Members: ${totalMembers}
==================================
        `);
    }

    get books() {
        return this.#books;
    }

    get members() {
        return this.#members;
    }
}


// =========================================
// CREATE LIBRARY
// =========================================

const library = new Library(
    "Community Knowledge Library"
);


// =========================================
// CREATE BOOKS
// =========================================

const book1 = new Book(
    "JavaScript Essentials",
    "John Doe",
    "ISBN001",
    2020
);

const book2 = new Book(
    "NodeJS Mastery",
    "Jane Smith",
    "ISBN002",
    2021
);

const book3 = new Book(
    "CSS Secrets",
    "Lea Verou",
    "ISBN003",
    2018
);

const book4 = new Book(
    "HTML Handbook",
    "Mark Johnson",
    "ISBN004",
    2019
);

const book5 = new Book(
    "React Complete Guide",
    "Max Miller",
    "ISBN005",
    2023
);


// =========================================
// CREATE MEMBERS
// =========================================

const member1 = new Member(
    "Alice",
    "MEM001"
);

const member2 = new Member(
    "Bob",
    "MEM002"
);

const member3 = new Member(
    "Charlie",
    "MEM003"
);


// =========================================
// REGISTER MEMBERS
// =========================================

library.registerMember(member1);
library.registerMember(member2);
library.registerMember(member3);


// =========================================
// ADD BOOKS
// =========================================

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);


// =========================================
// BORROW BOOKS
// =========================================

member1.borrow(book1);
member1.borrow(book2);

member2.borrow(book3);

member3.borrow(book5);


// =========================================
// RETURN BOOKS
// =========================================

member1.returnBook(book2);

member3.returnBook(book5);


// =========================================
// SEARCH BOOK
// =========================================

console.log(
    library.searchBook("CSS Secrets")
);

console.log(
    library.searchBook("Python Advanced")
);


// =========================================
// AVAILABLE BOOKS
// =========================================

console.log(
    "Available Books:"
);

console.log(
    library.getAvailableBooks()
        .map(book => book.title)
);


// =========================================
// BORROWED BOOKS
// =========================================

console.log(
    "Borrowed Books:"
);

console.log(
    library.getBorrowedBooks()
        .map(book => book.title)
);


// =========================================
// FINAL REPORT
// =========================================

library.generateLibraryReport();


// =========================================
// STATIC PROPERTIES
// =========================================

console.log(
    "Total Books Created:",
    Book.totalBooksCreated
);

console.log(
    "Total Members:",
    Member.totalMembers
);


/**
 * Methods used
 * 
 * find() - used to search for a book, and returns the first matching item.
 * 
 * filter() - used to get the available books, and returns all matching books.
 * 
 * map() - used to display book titles and tranforms an arry into another array
 * 
 * findIndex() - used when returning a borrowed book, it finds the index before removing with splice()
 * 
 * splice() - used to remove returned book, it Removes the elements from the books array and, returning the deleted element
 */