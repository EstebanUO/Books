const URL = "https://fakerapi.it/api/v1/books?";

const selectQuantity = document.getElementById('quantity-books');
const selectLetter = document.getElementById('alphabet');
const btnBooks = document.getElementById('btn-Books');
const renderbook = document.getElementById('render-book');

const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const quantity = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

window.addEventListener('load', loadSelects);
btnBooks.addEventListener('click', renderBooks);

const fetchBooks = async (URL, quantity) => {
    const res = await fetch(`${URL}_quantity=${quantity}`);
    const data = await res.json();
    return data
}

async function renderBooks() {
    const quantity = parseInt(selectQuantity.value);
    const letter = selectLetter.value.toUpperCase();
    const books = await fetchBooks(URL, quantity);
    console.log(books);
    renderbook.innerHTML = '';
    books.data.map( book => {
        letter !== 'ANY LETTER' ?  book.title.charAt(0) === letter ? createBooks(book) : null : createBooks(book);
    });
}

function loadSelects() {
    
    quantity.map( quantity => {
        const option = document.createElement('option');
        option.value = quantity;
        option.textContent = quantity;
        selectQuantity.appendChild(option);
    });

    letters.map(letters => {
        const option = document.createElement('option');
        option.value = letters;
        option.textContent = letters;
        selectLetter.appendChild(option);
    });
}

function createBooks(book) {

    renderbook.innerHTML = renderbook.innerHTML + `
    <div class="book">        
        <div class="img-book">
            <img src=${book.image} alt=${book.title}>
        </div>
        <div class="description-book">
            <h2>Title: ${book.title}</h2>
            <p>Author: ${book.author}</p>
            <span>
                ${book.description}
            </span>
        </div>
    </div>`;
    // const cuadro = document.createElement('div');
    // cuadro.setAttribute('class', 'cards');

    // const images = document.createElement('img');
    // images.setAttribute('src', book.image);
    // cuadro.appendChild(images);

    // const tittle = document.createElement('p');
    // tittle.textContent = book.title;
    // cuadro.appendChild(tittle);

    // const description = document.createElement('p');
    // description.textContent = book.description;
    // cuadro.appendChild(description);

    // const autor = document.createElement('p');
    // autor.textContent = book.author;
    // cuadro.appendChild(autor);

    // container.appendChild(cuadro);
}