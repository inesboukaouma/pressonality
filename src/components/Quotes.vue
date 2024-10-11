<script setup>
  import { ref, onMounted } from 'vue';

  const quoteData = ref(null);
  const loading = ref(false);

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
  <div v-if="quoteData">
    <div>{{ quoteData.quote }}</div>
    <div>{{ quoteData.author }}</div>
  </div>
</template>

<style lang="scss" scoped></style>
