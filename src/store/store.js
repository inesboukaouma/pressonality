import { reactive } from 'vue';

const loadCartFromStorage = () => {
  const cartItems = localStorage.getItem('cartItems');
  return cartItems ? JSON.parse(cartItems) : [];
};

const saveCartToStorage = (cartItems) => {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

const initialCart = loadCartFromStorage();

export const store = reactive({
  cartItems: initialCart,

  get cartValue() {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  },

  addToCart(product) {
    const existingItem = this.cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
    // console.log(`Produit ${product.id} ajouté au panier. Total: ${this.cartValue}`);
    saveCartToStorage(this.cartItems);
  },
  // takes a productId and checks if the item is in the cart. If it is, it reduces the quantity by one or removes it
  removeFromCart(productId) {
    const index = this.cartItems.findIndex((item) => item.id === productId);
    if (index > -1) {
      if (this.cartItems[index].quantity > 1) {
        this.cartItems[index].quantity--;
      } else {
        this.cartItems.splice(index, 1);
      }
      // console.log(`Produit ${productId} retiré du panier. Total: ${this.cartValue}`);
      saveCartToStorage(this.cartItems);
    }
  },

  clearCart() {
    this.cartItems = [];
    saveCartToStorage(this.cartItems);
  },

  products: [
    { id: '1', name: 'Christmas', price: 59.99, imageUrl: '/public/XmasNails.webp' },
    { id: '2', name: 'Barbie', price: 50.99, imageUrl: '/public/barbie.webp' },
    {
      id: '3',
      name: 'Strawberry',
      price: 65.99,
      imageUrl: '/public/strawberry.webp',
      sizes: ['xs', 's', 'm', 'l'],
      shape: ['almond', 'square', 'stiletto'],
      length: ['s, m, l, xl'],
    },
    // ... more products
  ],
});
