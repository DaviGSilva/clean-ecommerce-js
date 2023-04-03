test('should calculate order price with 3 products', () => {
    const products = getProducts();
    const subtotal = calculateSubtotal(products);
    const order = { products, subtotal };
    expect(order.products.length).toBe(3);
    expect(order.subtotal).toBeCloseTo(1229.99);
});

test('should calculate order price with discount coupon', () => {
    const products = getProducts();
    const discount = 50;
    const subtotal = calculateSubtotal(products, discount);
    const order = { products, subtotal, discount };
    expect(order.products.length).toBe(3);
    expect(order.subtotal).toBeCloseTo(614.99);
});

test('should throw an exception when invalid CPF is given', () => {
    const cpf = '';
    const products = getProducts();
    const subtotal = calculateSubtotal(products);
    const order = { products, subtotal, cpf };
    expect(() => validateCpf(order.cpf)).toThrow(new Error('Invalid CPF'));
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

function calculateSubtotal(products: Array<any>, discountPercent?: number) {
    const initialValue = 0;
    const subtotal = products.reduce(
        (accumulator, product) => accumulator + product.price,
        initialValue
    );
    if (!discountPercent) {
        return subtotal;
    }
    const discount = subtotal * (discountPercent/100);
    return subtotal - discount;
}

function validateCpf(cpf: string) {
    if (!cpf || cpf.length < 0) {
        throw new Error('Invalid CPF');
    }
    return true;
}
