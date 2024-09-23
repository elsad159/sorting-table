let products = [
    {
        id: 1,
        nameOfProduct: "Колбаса",
        priceOfProduct: 10,
        quantityOfProduct: 200
    },
    {
        id: 2,
        nameOfProduct: "Пельмени",
        priceOfProduct: 20,
        quantityOfProduct: 50
    },
    {
        id: 3,
        nameOfProduct: "Пицца",
        priceOfProduct: 25,
        quantityOfProduct: 100
    },
    {
        id: 4,
        nameOfProduct: "Бургер X2",
        priceOfProduct: 15,
        quantityOfProduct: 500
    },
    {
        id: 5,
        nameOfProduct: "Кябаб",
        priceOfProduct: 35,
        quantityOfProduct: 120
    }
];


function renderProducts(products) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = ""
    products.forEach(product => {
        let newRow = `
            <tr>
                <td>${product.nameOfProduct}</td>
                <td>${product.priceOfProduct}</td>
                <td>${product.quantityOfProduct}</td>
            </tr>
        `

        document.getElementById("tableBody").innerHTML += newRow
    })
}

renderProducts(products)

document.getElementById("qwerty").addEventListener("change", function () {
    if (this.value === 'up') {
        products.sort((a, b) => a.priceOfProduct - b.priceOfProduct);
    } else {
        products.sort((a, b) => b.priceOfProduct - a.priceOfProduct);
    }

    renderProducts(products);
})