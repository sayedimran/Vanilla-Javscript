// Book Class : Reprents the Book

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

//UI Class : Handle User Interface e.g Book Displays in table, or Removes e.t.c

class UI {
  static displayBooks() {
    const StoredBooks = [
      {
        title: "Book One",
        author: "Imran Sayed",
        isbn: "3434434"
      },
      {
        title: "Book Two",
        author: "Ehtesham Siddiqui",
        isbn: "445545"
      }
    ];

    const books = StoredBooks;

    books.forEach(book => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector("#book-list");

    const row = document.createElement("tr");

    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="btn btn-danger btn-sm btn-block delete">X</a></td>
    `;

    list.appendChild(row);
  }
  // Delete Book Function

  static deleteBook(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
}

// Store Class : Handles Storage i.e Books

//Events : Display Books in Table

document.addEventListener("DOMContentLoaded", UI.displayBooks);

//Events : Add the Books

document.querySelector("#book-form").addEventListener("submit", e => {
  //Prevent actual Submit

  e.preventDefault();

  // Get Form Values

  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  // Instantiate a Book

  const book = new Book(title, author, isbn);

  // Add Book to Table

  UI.addBookToList(book);

  // Clear Fields

  UI.clearFields();
});

//Events : Remove the Books

document.querySelector("#book-list").addEventListener("click", e => {
  UI.deleteBook(e.target);
});
