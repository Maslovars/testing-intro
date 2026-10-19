function assertValidQuantity(quantity, stock) {
    if (!Number.isInteger(quantity) || quantity <= 0 || quantity > stock) {
        throw new RangeError(
            'The quantity of an item must be a positive integer and must not exceed the stock on hand.',
        );
    }
}

function addToCart(cart, product, quantity) {
    assertValidQuantity(quantity, product.stock);

    const existingProduct = cart.find((item) => item.id === product.id);
    if (!existingProduct) {
        return [...cart, { ...product, quantity }];
    }

    const updatedQuantity = existingProduct.quantity + quantity;
    assertValidQuantity(updatedQuantity, existingProduct.stock);

    return cart.map((item) =>
        item.id === product.id ? { ...item, quantity: updatedQuantity } : item,
    );
}

function changeQuantity(cart, productId, quantity) {
    const product = cart.find((item) => item.id === productId);
    if (!product) return cart;

    assertValidQuantity(quantity, product.stock);
    return cart.map((item) =>
        item.id === productId ? { ...item, quantity } : item,
    );
}

function removeFromCart(cart, productId) {
    return cart.filter((item) => item.id !== productId);
}

function calculateCartSubtotal(cart) {
    return cart.reduce(
        (subtotal, item) => subtotal + item.price * item.quantity,
        0,
    );
}

function calculateOrderTotal(cart, promoCode = '') {
    const subtotal = calculateCartSubtotal(cart);
    const discount =
        promoCode === 'SAVE10' && subtotal >= 20000
            ? Math.round(subtotal * 0.1)
            : 0;
    const delivery = subtotal < 50000 ? 30000 : 0;

    return {
        subtotal,
        discount,
        delivery,
        total: subtotal - discount + delivery,
    };
}

const cartApi = {
    addToCart,
    changeQuantity,
    removeFromCart,
    calculateCartSubtotal,
    calculateOrderTotal,
};

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
