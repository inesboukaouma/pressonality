<script setup>
  import { store } from '@/store/store';

  const removeItem = (productId) => {
    store.removeFromCart(productId);
  };

  const clearCart = () => {
    store.clearCart();
  };
</script>

<template>
  <div class="cart-container flex p-4 bg-white shadow-md flex-col rounded-lg min-h-[25vh]">
    <h2 class="text-2xl font-bold mb-4">Votre Panier</h2>
    <div v-if="store.cartItems.length === 0" class="text-gray-500">Votre panier est vide.</div>
    <ul v-else>
      <li v-for="item in store.cartItems" :key="item.id" class="flex justify-between items-center py-2 border-b">
        <div>
          <span class="font-semibold">{{ item.name }}</span>
          <span class="text-gray-600 ml-2">x {{ item.quantity }}</span>
        </div>
        <div>
          <span class="mr-4">{{ (item.price * item.quantity).toFixed(2) }} €</span>
          <button @click="removeItem(item.id)" class="text-red-500 hover:text-red-700">Retirer</button>
        </div>
      </li>
    </ul>
    <div v-if="store.cartItems.length > 0" class="mt-4">
      <div class="font-bold text-xl">
        Total: {{ store.cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2) }} €
      </div>
      <button @click="clearCart" class="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
        Vider le panier
      </button>
    </div>
  </div>
</template>
