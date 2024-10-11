// store.js
import { reactive } from 'vue';

export const store = reactive({
  cartValue: 0,
  incrementCart() {
    if (store.cartValue >= 0) {
      this.cartValue++;
    }
    console.log(this.cartValue);
  },
  decrementCart() {
    if (store.cartValue > 0) {
      this.cartValue--;
    }
    console.log(this.cartValue);
  },
});
