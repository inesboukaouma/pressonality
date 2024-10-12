<script setup>
  import { ref, onMounted } from 'vue';

  const quoteData = ref(null);
  const loading = ref(false);
  // fetches a random quote from a web API
  const fetchData = async () => {
    loading.value = true;
    try {
      const response = await fetch('https://dummyjson.com/quotes/random');
      if (response.ok) {
        const data = await response.json();
        quoteData.value = data;
      }
    } catch (e) {
      console.error(e);
    } finally {
      loading.value = false;
    }
  };
  onMounted(fetchData);
</script>

<template>
  <div v-if="quoteData" class="flex bg-pink-400 px-16 pt-8 rounded-xl md:mt-40 mt-20 font-tangerine text-5xl flex-col">
    <div class="mb-16">{{ quoteData.quote }}</div>
    <div class="mb-4 flex justify-end">{{ quoteData.author }}</div>
  </div>
</template>

<style lang="scss" scoped></style>
