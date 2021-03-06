const productsJson = `
[
    {
        "id": "1",
        "title": "Angry Viking",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga expedita obcaecati adipisci explicabo impedit facere est qui voluptate. Fugiat libero molestiae suscipit eaque quae nihil sequi esse numquam dolor nisi!",
        "price": 10.99,
        "imgUrl": "img/angry.svg"
    },
    {
        "id": "2",
        "title": "Facepalm",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga expedita obcaecati adipisci explicabo impedit facere est qui voluptate. Fugiat libero molestiae suscipit eaque quae nihil sequi esse numquam dolor nisi!",
        "price": 12.99,
        "imgUrl": "img/facepalm.svg"
    },
    {
        "id": "3",
        "title": "Beer",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga expedita obcaecati adipisci explicabo impedit facere est qui voluptate. Fugiat libero molestiae suscipit eaque quae nihil sequi esse numquam dolor nisi!",
        "price": 15.99,
        "imgUrl": "img/beer.svg"
    },
    {
        "id": "4",
        "title": "Viking",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga expedita obcaecati adipisci explicabo impedit facere est qui voluptate. Fugiat libero molestiae suscipit eaque quae nihil sequi esse numquam dolor nisi!",
        "price": 13.99,
        "imgUrl": "img/viking.svg"
    },
    {
        "id": "5",
        "title": "Kitten",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga expedita obcaecati adipisci explicabo impedit facere est qui voluptate. Fugiat libero molestiae suscipit eaque quae nihil sequi esse numquam dolor nisi!",
        "price": 18.99,
        "imgUrl": "https://placekitten.com/200/139"
    },
    {
        "id": "6",
        "title": "Kitten",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga expedita obcaecati adipisci explicabo impedit facere est qui voluptate. Fugiat libero molestiae suscipit eaque quae nihil sequi esse numquam dolor nisi!",
        "price": 17.99,
        "imgUrl": "https://placekitten.com/200/139?2"
    }
]
`;

function renderProducts(products, sortDirection) {
    const sortedProducts = [...products].sort( (a, b ) => 
        sortDirection === 'ascending' ? a.price - b.price : b.price - a.price
    );
    let productsHtml = '';
    for (const product of sortedProducts) {
        productsHtml += `
            <article>
                <img src="${product.imgUrl}" alt="${product.title}" />
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <div class="buttons">
                    <button class="button card-button">Info</button>
                    <button class="button card-button">Buy - $${product.price}</button>
                </div>
        </article>`;
    }
    document.querySelector('.products').innerHTML = productsHtml;
}

const products = JSON.parse(productsJson);

renderProducts(products, 'ascending');


const btnSortAsc = document.querySelector('.sort-asc');
const btnSortDesc = document.querySelector('.sort-desc');

btnSortAsc.addEventListener('click', sortAscending);
btnSortDesc.addEventListener('click', sortDescending);

function sortAscending() {
    renderProducts(products, 'ascending');
}

function sortDescending() {
    renderProducts(products, 'descending');
}