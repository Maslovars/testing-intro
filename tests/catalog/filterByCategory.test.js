const products = require('../../src/data/products');
const { filterByCategory } = require('../../src/catalog');

describe('filterByCategory', () => {
    test("'all' returns every product", () => {
        expect(filterByCategory(products, 'all').map(({ id }) => id)).toEqual([
            1, 2, 3, 4, 5, 6,
        ]);
    });

    test('undefined returns every product', () => {
        expect(
            filterByCategory(products, undefined).map(({ id }) => id),
        ).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('an empty category returns every product', () => {
        expect(filterByCategory(products, '').map(({ id }) => id)).toEqual([
            1, 2, 3, 4, 5, 6,
        ]);
    });

    test("'electronics' returns products 1 and 2", () => {
        expect(
            filterByCategory(products, 'electronics').map(({ id }) => id),
        ).toEqual([1, 2]);
    });

    test("'books' returns products 3 and 6", () => {
        expect(filterByCategory(products, 'books').map(({ id }) => id)).toEqual(
            [3, 6],
        );
    });

    test("'home' returns products 4 and 5", () => {
        expect(filterByCategory(products, 'home').map(({ id }) => id)).toEqual([
            4, 5,
        ]);
    });

    test("'clothes' returns no products", () => {
        expect(
            filterByCategory(products, 'clothes').map(({ id }) => id),
        ).toEqual([]);
    });

    test("'toys' returns no products", () => {
        expect(filterByCategory(products, 'toys').map(({ id }) => id)).toEqual(
            [],
        );
    });

    test("'sports' returns no products", () => {
        expect(
            filterByCategory(products, 'sports').map(({ id }) => id),
        ).toEqual([]);
    });
});
