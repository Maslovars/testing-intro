const products = require('../../src/data/products');
const { searchProducts } = require('../../src/catalog');

describe('searchProducts', () => {
    test("'Наушники' finds product 1", () => {
        expect(
            searchProducts(products, 'Наушники').map(({ id }) => id),
        ).toEqual([1]);
    });

    test("'Чистый код' finds product 6", () => {
        expect(
            searchProducts(products, 'Чистый код').map(({ id }) => id),
        ).toEqual([6]);
    });

    test("'Настольная лампа' finds product 4", () => {
        expect(
            searchProducts(products, 'Настольная лампа').map(({ id }) => id),
        ).toEqual([4]);
    });

    test('search is case-insensitive for javascript', () => {
        expect(
            searchProducts(products, 'javascript').map(({ id }) => id),
        ).toEqual([3]);
    });

    test('search is case-insensitive for ЧЕХОЛ', () => {
        expect(searchProducts(products, 'ЧЕХОЛ').map(({ id }) => id)).toEqual([
            5,
        ]);
    });

    test('search is case-insensitive for наушники', () => {
        expect(
            searchProducts(products, 'наушники').map(({ id }) => id),
        ).toEqual([1]);
    });

    test('an empty query returns every product', () => {
        expect(searchProducts(products, '').map(({ id }) => id)).toEqual([
            1, 2, 3, 4, 5, 6,
        ]);
    });

    test('a whitespace-only query returns every product', () => {
        expect(searchProducts(products, '   ').map(({ id }) => id)).toEqual([
            1, 2, 3, 4, 5, 6,
        ]);
    });

    test('a query containing tabs and newlines returns every product', () => {
        expect(searchProducts(products, '\t\n').map(({ id }) => id)).toEqual([
            1, 2, 3, 4, 5, 6,
        ]);
    });
});
