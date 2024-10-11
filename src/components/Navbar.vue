<script setup>
  import { ref, onMounted, onUnmounted, computed } from 'vue';
  import { useRouter } from 'vue-router';
  import IconFavourite from './icons/IconFavourite.vue';
  import IconCart from './icons/IconCart.vue';
  import IconPerson from './icons/IconPerson.vue';
  import { store } from '@/store/store';

  const isMenuOpen = ref(false);
  const router = useRouter();
  const navRef = ref(null);

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };

  const closeMenu = () => {
    isMenuOpen.value = false;
  };

  const navigateTo = (path) => {
    router.push(path);
    closeMenu();
  };

  const handleClickOutside = (event) => {
    if (navRef.value && !navRef.value.contains(event.target) && isMenuOpen.value) {
      closeMenu();
    }
  };

  const incrementCart = () => {
    store.incrementCart();
  };

  const decrementCart = () => {
    store.decrementCart();
  };

  onMounted(() => {
    document.addEventListener('click', handleClickOutside);
  });

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
  });

  const cartValue = computed(() => store.cartValue);
</script>

<template>
  <div ref="navRef" class="fixed top-0 left-0 right-0 bg-pink-500 py-4 z-50">
    <div class="container mx-auto px-4 flex justify-between items-center">
      <div class="text-white font-bold text-2xl">Logo Pressonality</div>

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

      <!-- Icônes et menu hamburger -->
      <div class="flex items-center">
        <button class="text-white mr-2"><IconPerson /></button>
        <div class="flex items-center mr-2">
          <button @click="decrementCart" class="text-white px-2 py-1 bg-pink-600 rounded-l">-</button>
          <span class="text-white px-3 py-1 bg-pink-600">{{ cartValue }}</span>
          <button @click="incrementCart" class="text-white px-2 py-1 bg-pink-600 rounded-r">+</button>
        </div>
        <button class="text-white mr-2 relative">
          <IconCart />
          <span
            v-if="cartValue > 0"
            class="absolute -top-2 -right-2 bg-white text-pink-500 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold"
          >
            {{ cartValue }}
          </span>
        </button>
        <button class="text-white mr-2"><IconFavourite /></button>
        <!-- Menu hamburger pour mobile -->
        <button @click.stop="toggleMenu" class="lg:hidden text-white">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Menu mobile -->
    <div v-if="isMenuOpen" class="lg:hidden absolute top-full left-0 right-0 bg-pink-500">
      <div class="container mx-auto px-4 py-2 space-y-1 text-right">
        <a @click="navigateTo('/')" class="block px-3 py-2 rounded-md text-white hover:bg-pink-600 cursor-pointer"
          >Accueil</a
        >
        <a @click="navigateTo('/shop')" class="block px-3 py-2 rounded-md text-white hover:bg-pink-600 cursor-pointer"
          >Boutique</a
        >
        <a
          @click="navigateTo('/custom-nails')"
          class="block px-3 py-2 rounded-md text-white hover:bg-pink-600 cursor-pointer"
          >Ongles personnalisés</a
        >
        <a
          @click="navigateTo('/find-your-size')"
          class="block px-3 py-2 rounded-md text-white hover:bg-pink-600 cursor-pointer"
          >Trouver sa taille</a
        >
        <a @click="navigateTo('/guide')" class="block px-3 py-2 rounded-md text-white hover:bg-pink-600 cursor-pointer"
          >Guide</a
        >
        <a @click="navigateTo('/faq')" class="block px-3 py-2 rounded-md text-white hover:bg-pink-600 cursor-pointer"
          >FAQ</a
        >
      </div>
    </div>
  </div>
</template>
