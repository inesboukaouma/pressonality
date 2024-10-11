<script setup>
  import { store } from '@/store/store';
  import router from '@/router';

  const props = defineProps({
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  });

  const addToCart = () => {
    store.addToCart({
      id: props.id,
      name: props.name,
      price: props.price,
      imageUrl: props.imageUrl,
    });
    console.log(`${props.name} ajouté au panier`);
  };
</script>

<template>
  <div
    class="bg-white shadow-xl shadow-pink-200/80 rounded-lg overflow-hidden flex gap-5 md:flex-col mb-12 md:mb-0 mx-4"
  >
    <a @click="router.push(`/shop/${props.id}`)"
      ><img :src="imageUrl" :alt="name" class="md:max-w-[45vw] max-w-[40vw] h-[30vh] lg:h-[40vh] object-fill"
    /></a>
    <div class="p-4">
      <h2 class="font-bold text-xl mb-2">{{ name }}</h2>
      <p class="text-gray-700 text-base mb-4">{{ price.toFixed(2) }} €</p>
      <button @click="addToCart" class="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
        Ajouter au panier
      </button>
    </div>
  </div>
</template>
