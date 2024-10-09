<script setup>
  import IconFavourite from './icons/IconFavourite.vue';
  import IconSearch from './icons/IconSearch.vue';
</script>

<template>
  <div class="flex justify-between bg-pink-500 py-4">
    <nav class="flex flex-wrap gap-4 ml-8">
      <RouterLink to="/">Acceuil</RouterLink>
      <RouterLink to="/shop">Boutique</RouterLink>
      <RouterLink to="/custom-nails">Ongles personnalisés</RouterLink>
      <RouterLink to="/find-your-size">Trouver sa taille</RouterLink>
      <RouterLink to="/guide">Guide</RouterLink>
      <RouterLink to="/faq">FAQ</RouterLink>
    </nav>
    <div>
      <button class=""><IconSearch /></button>
      <button class=""><IconFavourite /></button>
    </div>
  </div>
</template>
