<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import IconFavourite from './icons/IconFavourite.vue';
  import IconCart from './icons/IconCart.vue';
  import IconPerson from './icons/IconPerson.vue';
  import { store } from '@/store/store';

  const router = useRouter();
  const isMenuOpen = ref(false);

  const navigateTo = (path) => {
    router.push(path);
    isMenuOpen.value = false;
  };

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };
</script>

<template>
  <div class="fixed top-0 left-0 right-0 bg-pink-500 py-4 z-50">
    <div class="container mx-auto px-4 flex justify-between items-center">
      <div @click="navigateTo('/')" class="text-white font-bold text-2xl cursor-pointer">Logo Pressonality</div>

      <!-- Navigation pour grands écrans -->
      <nav class="hidden lg:flex lg:items-center lg:w-auto lg:text-xl">
        <div class="lg:flex-grow">
          <a
            @click="navigateTo('/')"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-pink-200 mr-4 cursor-pointer"
          >
            Accueil
          </a>
          <a
            @click="navigateTo('/shop')"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-pink-200 mr-4 cursor-pointer"
          >
            Boutique
          </a>
          <a
            @click="navigateTo('/custom-nails')"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-pink-200 mr-4 cursor-pointer"
          >
            Ongles personnalisés
          </a>
          <a
            @click="navigateTo('/find-your-size')"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-pink-200 mr-4 cursor-pointer"
          >
            Trouver sa taille
          </a>
          <a
            @click="navigateTo('/guide')"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-pink-200 mr-4 cursor-pointer"
          >
            Guide
          </a>
          <a
            @click="navigateTo('/faq')"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-pink-200 mr-4 cursor-pointer"
          >
            FAQ
          </a>
        </div>
      </nav>

      <!-- Icônes -->
      <div class="flex items-center">
        <button class="text-white mr-2"><IconPerson /></button>
        <a @click="navigateTo('/cart')" class="text-white mr-2 relative hover:cursor-pointer">
          <IconCart />
          <span
            v-if="store.cartValue > 0"
            class="absolute -top-2 -right-2 bg-pink-700 text-pink-200 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold"
          >
            {{ store.cartValue }}
          </span>
        </a>
        <button class="text-white mr-2"><IconFavourite /></button>

        <!-- Hamburger menu button -->
        <button @click="toggleMenu" class="lg:hidden text-white">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="isMenuOpen" class="lg:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 text-right sm:px-3 flex flex-col">
        <a @click="navigateTo('/')" class="px-3 py-2 text-white hover:bg-pink-600 cursor-pointer">Accueil</a>
        <a @click="navigateTo('/shop')" class="px-3 py-2 text-white hover:text-pink-600 cursor-pointer">Boutique</a>
        <a @click="navigateTo('/custom-nails')" class="px-3 py-2 text-white hover:bg-pink-600 cursor-pointer"
          >Ongles personnalisés</a
        >
        <a @click="navigateTo('/find-your-size')" class="px-3 py-2 text-white hover:bg-pink-600 cursor-pointer"
          >Trouver sa taille</a
        >
        <a @click="navigateTo('/guide')" class="px-3 py-2 text-white hover:bg-pink-600 cursor-pointer">Guide</a>
        <a @click="navigateTo('/faq')" class="px-3 py-2 text-white hover:bg-pink-600 cursor-pointer">FAQ</a>
      </div>
    </div>
  </div>
</template>
