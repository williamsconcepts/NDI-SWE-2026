// =========================================
// BOOK
// =========================================

class Book {

    static totalBooksCreated = 0;

    #isAvailable;

    constructor(title, author, isbn, yearPublished) {

        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.yearPublished = yearPublished;

        this.#isAvailable = true;

        Book.totalBooksCreated++;
    }

    get isAvailable() {
        return this.#isAvailable;
    }

    set isAvailable(status) {
        this.#isAvailable = status;
    }
}


// =========================================
// MEMBER
// =========================================

class Member {

    #borrowedBooks;

    constructor(name, memberId) {

        this.name = name;
        this.memberId = memberId;

        this.#borrowedBooks = [];
    }

    borrow(book) {

        if (!book.isAvailable) {
            alert(`${book.title} is unavailable`);
            return;
        }

        book.isAvailable = false;

        this.#borrowedBooks.push(book);

        alert(`${this.name} borrowed "${book.title}"`);
    }

    returnBook(book) {

        const index =
            this.#borrowedBooks.findIndex(
                b => b.isbn === book.isbn
            );

        if (index === -1) {
            alert(`${this.name} did not borrow this book`);
            return;
        }

        this.#borrowedBooks.splice(index, 1);

        book.isAvailable = true;

        alert(`${this.name} returned "${book.title}"`);
    }

    get borrowedBooks() {
        return this.#borrowedBooks;
    }
}


// =========================================
// LIBRARY
// =========================================

class Library {

    #books = [];
    #members = [];

    addBook(book) {

        const existingBook =
            this.#books.find(
                b => b.isbn === book.isbn
            );

        if (existingBook) {
            alert("ISBN already exists");
            return;
        }

        this.#books.push(book);
    }

    registerMember(member) {

        const existingMember =
            this.#members.find(
                m => m.memberId === member.memberId
            );

        if (existingMember) {
            alert("Member ID already exists");
            return;
        }

        this.#members.push(member);
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

    searchBook(title) {

        return this.#books.find(
            book =>
                book.title.toLowerCase() ===
                title.toLowerCase()
        );
    }

    get books() {
        return this.#books;
    }

    get members() {
        return this.#members;
    }
}


// =========================================
// LIBRARY INSTANCE
// =========================================

const library = new Library();


// =========================================
// LOCAL STORAGE
// =========================================

function saveLibrary() {

    const libraryData = {

        books: library.books.map(book => ({
            title: book.title,
            author: book.author,
            isbn: book.isbn,
            yearPublished: book.yearPublished,
            isAvailable: book.isAvailable
        })),

        members: library.members.map(member => ({
            name: member.name,
            memberId: member.memberId
        }))
    };

    localStorage.setItem(
        "communityLibrary",
        JSON.stringify(libraryData)
    );
}


function loadLibrary() {

    const storedData =
        JSON.parse(
            localStorage.getItem("communityLibrary")
        );

    if (!storedData) return;

    storedData.books.forEach(bookData => {

        const book = new Book(
            bookData.title,
            bookData.author,
            bookData.isbn,
            bookData.yearPublished
        );

        book.isAvailable =
            bookData.isAvailable;

        library.addBook(book);
    });

    storedData.members.forEach(memberData => {

        const member = new Member(
            memberData.name,
            memberData.memberId
        );

        library.registerMember(member);
    });
}


// =========================================
// DOM
// =========================================

const addBookBtn =
    document.querySelector("#add-book-btn");

const registerMemberBtn =
    document.querySelector("#register-member-btn");

const borrowBtn =
    document.querySelector("#borrow-btn");

const returnBtn =
    document.querySelector("#return-btn");

const borrowMember =
    document.querySelector("#borrow-member");

const borrowBook =
    document.querySelector("#borrow-book");

const returnMember =
    document.querySelector("#return-member");

const returnBook =
    document.querySelector("#return-book");


// =========================================
// RENDER
// =========================================

function renderLibrary() {

    document.querySelector("#total-books")
        .textContent = library.books.length;

    document.querySelector("#available-books")
        .textContent =
        library.getAvailableBooks().length;

    document.querySelector("#borrowed-books")
        .textContent =
        library.getBorrowedBooks().length;

    document.querySelector("#total-members")
        .textContent =
        library.members.length;


    const availableBookList =
        document.querySelector(
            "#available-book-list"
        );

    availableBookList.innerHTML = "";

    library.books.forEach(book => {

        const li =
            document.createElement("li");

        li.textContent =
            `${book.title}
            (${book.isAvailable
                ? "Available"
                : "Borrowed"})`;

        availableBookList.append(li);
    });


    const memberList =
        document.querySelector("#member-list");

    memberList.innerHTML = "";

    library.members.forEach(member => {

        const li =
            document.createElement("li");

        li.textContent =
            `${member.name}
            (${member.memberId})`;

        memberList.append(li);
    });

    populateDropdowns();
}


// =========================================
// POPULATE DROPDOWNS
// =========================================

function populateDropdowns() {

    borrowMember.innerHTML = "";
    borrowBook.innerHTML = "";

    returnMember.innerHTML = "";
    returnBook.innerHTML = "";

    library.members.forEach(member => {

        borrowMember.innerHTML += `
            <option value="${member.memberId}">
                ${member.name}
            </option>
        `;

        returnMember.innerHTML += `
            <option value="${member.memberId}">
                ${member.name}
            </option>
        `;
    });

    library.books.forEach(book => {

        borrowBook.innerHTML += `
            <option value="${book.isbn}">
                ${book.title}
            </option>
        `;

        returnBook.innerHTML += `
            <option value="${book.isbn}">
                ${book.title}
            </option>
        `;
    });
}


// =========================================
// ADD BOOK
// =========================================

addBookBtn.addEventListener("click", () => {

    const title =
        document.querySelector("#book-title")
        .value.trim();

    const author =
        document.querySelector("#book-author")
        .value.trim();

    const isbn =
        document.querySelector("#book-isbn")
        .value.trim();

    const year =
        document.querySelector("#book-year")
        .value.trim();

    if (!title || !author || !isbn || !year) {
        alert("Fill all fields");
        return;
    }

    const book =
        new Book(
            title,
            author,
            isbn,
            year
        );

    library.addBook(book);

    saveLibrary();

    renderLibrary();

    document.querySelector("#book-title").value = "";
    document.querySelector("#book-author").value = "";
    document.querySelector("#book-isbn").value = "";
    document.querySelector("#book-year").value = "";
});


// =========================================
// REGISTER MEMBER
// =========================================

registerMemberBtn.addEventListener("click", () => {

    const name =
        document.querySelector("#member-name")
        .value.trim();

    const memberId =
        document.querySelector("#member-id")
        .value.trim();

    if (!name || !memberId) {
        alert("Fill all fields");
        return;
    }

    const member =
        new Member(name, memberId);

    library.registerMember(member);

    saveLibrary();

    renderLibrary();

    document.querySelector("#member-name").value = "";
    document.querySelector("#member-id").value = "";
});


// =========================================
// BORROW BOOK
// =========================================

borrowBtn.addEventListener("click", () => {

    const member =
        library.members.find(
            m =>
                m.memberId ===
                borrowMember.value
        );

    const book =
        library.books.find(
            b =>
                b.isbn ===
                borrowBook.value
        );

    if (!member || !book) return;

    member.borrow(book);

    saveLibrary();

    renderLibrary();
});


// =========================================
// RETURN BOOK
// =========================================

returnBtn.addEventListener("click", () => {

    const member =
        library.members.find(
            m =>
                m.memberId ===
                returnMember.value
        );

    const book =
        library.books.find(
            b =>
                b.isbn ===
                returnBook.value
        );

    if (!member || !book) return;

    // Since borrowedBooks aren't stored,
    // we'll simply mark the book available

    book.isAvailable = true;

    saveLibrary();

    renderLibrary();
});


// =========================================
// CLEAR LIBRARY
// =========================================

const clearLibraryBtn =
    document.querySelector("#clear-library");

if (clearLibraryBtn) {

    clearLibraryBtn.addEventListener(
        "click",
        () => {

            localStorage.removeItem(
                "communityLibrary"
            );

            location.reload();
        }
    );
}


// =========================================
// INITIALIZE APP
// =========================================

loadLibrary();

renderLibrary();