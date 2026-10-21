const products = require('../../src/data/products');
const { sortProductsByPrice } = require('../../src/catalog');

describe('sortProductsByPrice', () => {
    test("sorts all products ascending with 'asc'", () => {
        expect(
            sortProductsByPrice(products, 'asc').map(({ id }) => id),
        ).toEqual([3, 6, 5, 4, 2, 1]);
    });

    test('sorts all products ascending by default', () => {
        expect(sortProductsByPrice(products).map(({ id }) => id)).toEqual([
            3, 6, 5, 4, 2, 1,
        ]);
    });

    test('sorts products [1, 3, 4] ascending', () => {
        const subset = products.filter(({ id }) => [1, 3, 4].includes(id));
        expect(sortProductsByPrice(subset, 'asc').map(({ id }) => id)).toEqual([
            3, 4, 1,
        ]);
    });

    test("sorts all products descending with 'desc'", () => {
        expect(
            sortProductsByPrice(products, 'desc').map(({ id }) => id),
        ).toEqual([1, 2, 4, 5, 6, 3]);
    });

    test('sorts products [3, 1, 4] descending', () => {
        const subset = [3, 1, 4].map((id) =>
            products.find((product) => product.id === id),
        );
        expect(sortProductsByPrice(subset, 'desc').map(({ id }) => id)).toEqual(
            [1, 4, 3],
        );
    });

    test('sorts products [5, 2, 6] descending', () => {
        const subset = [5, 2, 6].map((id) =>
            products.find((product) => product.id === id),
        );
        expect(sortProductsByPrice(subset, 'desc').map(({ id }) => id)).toEqual(
            [2, 5, 6],
        );
    });

    test('ascending sort does not mutate the original subset', () => {
        const subset = products.filter(({ id }) => [1, 3, 4].includes(id));
        sortProductsByPrice(subset, 'asc');
        expect(subset.map(({ id }) => id)).toEqual([1, 3, 4]);
    });

    test('descending sort does not mutate the original subset', () => {
        const subset = products.filter(({ id }) => [1, 3, 4].includes(id));
        sortProductsByPrice(subset, 'desc');
        expect(subset.map(({ id }) => id)).toEqual([1, 3, 4]);
    });

    test('default sort direction does not mutate the original products array', () => {
        sortProductsByPrice(products);
        expect(products.map(({ id }) => id)).toEqual([1, 2, 3, 4, 5, 6]);
    });
});
