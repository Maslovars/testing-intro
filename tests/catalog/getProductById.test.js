const products = require('../../src/data/products');
const { getProductById } = require('../../src/catalog');

describe('getProductById', () => {
    test('ID 1 returns products[0]', () => {
        expect(getProductById(products, 1)).toEqual(products[0]);
    });

    test('ID 4 returns products[3]', () => {
        expect(getProductById(products, 4)).toEqual(products[3]);
    });

    test('ID 6 returns products[5]', () => {
        expect(getProductById(products, 6)).toEqual(products[5]);
    });

    test('ID 0 returns null', () => {
        expect(getProductById(products, 0)).toBeNull();
    });

    test('ID 999 returns null', () => {
        expect(getProductById(products, 999)).toBeNull();
    });

    test('ID -1 returns null', () => {
        expect(getProductById(products, -1)).toBeNull();
    });

    test("string ID '1' returns null", () => {
        expect(getProductById(products, '1')).toBeNull();
    });

    test('undefined ID returns null', () => {
        expect(getProductById(products, undefined)).toBeNull();
    });

    test('NaN ID returns null', () => {
        expect(getProductById(products, NaN)).toBeNull();
    });
});
