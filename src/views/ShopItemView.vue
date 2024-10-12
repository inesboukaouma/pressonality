<script setup>
  import { store } from '@/store/store';
  import { defineProps, ref, onMounted } from 'vue';
  const props = defineProps({
    productId: {
      type: String,
      required: true,
    },
  });
  const product = ref(null);
  onMounted(() => {
    product.value = store.products.find((item) => item.id === props.productId);
    console.log(
      store.products.findIndex((item) => {
        console.log(item.id === props.productId);
        console.log(props.productId);
        item.id === props.productId;
      })
    );
  });
</script>

<template>
  <!-- <div>{{ product }}</div>
  <div>Name</div>
  <div>BIG IMAGE</div>
  <div>price</div>
  <input type="text" name="" id="" /> SIZE -->
</template>
