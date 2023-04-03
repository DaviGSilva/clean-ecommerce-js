test('should return name, description and price of product', () => {
    const product = {
        name: 'keyboard',
        description: 'Mechanic keyboard',
        price: 100.00,
    };
    expect(product.name).toBeDefined();
    expect(product.description).toBeDefined();
    expect(product.price).toBeDefined();
    expect(product.price).toBeGreaterThanOrEqual(0);
});
