test('should calculate total price from order with 3 products', () => {
    const products = getProducts();
    const subtotal = calculateSubtotal(products);
    const order = { products, subtotal };
    expect(order.products.length).toBe(3);
    expect(order.subtotal).toBe(1229.99);
});

function getProducts() {
    return [
        {
            name: 'keyboard',
            description: 'Mechanic keyboard',
            price: 100.00,
        },
        {
            name: 'monitor',
            description: 'Ultrawide monitor',
            price: 1000.00,
        },
        {
            name: 'mouse',
            description: 'Gamer mouse',
            price: 129.99,
        },
    ];
}

function calculateSubtotal(products) {
    const initialValue = 0;
    return products.reduce(
        (accumulator, product) => accumulator + product.price,
        initialValue
    );
}
