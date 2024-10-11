<script setup>
  import ProductItem from '@/components/ProductItem.vue';
  import { store } from '@/store/store';
</script>

<template>
  <div class="text-3xl flex flex-wrap mx-20 my-8 text-center justify-center lg:text-5xl lg:mt-14">
    <p>
      Vos <span class="text-pink-900">ongles</span>, votre <span class="text-pink-900">personnalité</span>, nos
      <span class="text-pink-900">press on nails</span>
    </p>
  </div>
  <!-- <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> -->
  <div class="flex flex-col md:flex-row md:gap-20 md:ml-[5%] lg:gap-40 lg:ml-[25%]">
    <ProductItem
      v-for="product in store.products"
      :key="product.id"
      :id="product.id"
      :name="product.name"
      :price="product.price"
      :imageUrl="product.imageUrl"
    />
  </div>
  <!-- <div class="flex flex-col md:flex-row gap-8 lg:gap-20 justify-center mt-14">
    <div class="items-center flex flex-col mx-8">
      <img src="/public/XmasNails.webp" alt="" class="w-56 lg:w-64" />
      <button class="bg-pink-500 rounded-3xl py-2 px-8 mt-4">Shop</button>
      <button onclick="addToCart(1)" class="bg-pink-500 rounded-3xl py-2 px-8 mt-4">Ajouter au panier</button>
    </div>
    <div class="items-center flex flex-col mx-8">
      <img src="/public/barbie.webp" alt="" class="w-56 lg:w-64" />
      <button class="bg-pink-500 rounded-3xl py-2 px-8 mt-4">Shop</button>
      <button onclick="addToCart(2)" class="bg-pink-500 rounded-3xl py-2 px-8 mt-4">Ajouter au panier</button>
    </div>
    <div class="items-center flex flex-col mx-8">
      <img src="/public/strawberry.webp" alt="" class="w-56 lg:w-64" />
      <button class="bg-pink-500 rounded-3xl py-2 px-8 mt-4 hover:opacity-45">Shop</button>
      <button onclick="addToCart(3)" class="bg-pink-500 rounded-3xl py-2 px-8 mt-4">Ajouter au panier</button>
    </div>
  </div> -->
  <div class="bg-pink-400 py-20 mt-20 px-3">
    <p class="text-silver text-2xl mb-8">Les press on nails, qu'est-ce q​​ue c'est ?</p>
    <p>
      Ce sont des faux ongles faits à vos mesures, selon vos envies, et facile d'application ! Vos obligations
      professionnelles requièrent de garder vos ongles naturels ? Utilisez les autocollants pour une soirée ou un
      weekend !
      <br />Vous n'avez pas le temps d'aller au salon pendant 2 à 3 heures mais vous voulez la tranquillité d'une pose
      qui tient ? La colle est faite pour vous, appliquez vos press on nails avec celle fournie et plus de problèmes
      jusqu'à 4 semaines ! ​Pour cela il vous suffit de suivre le
      <a href="/guide.vue" class="text-silver font-bold">guide d'application</a> et d'apprécier vos nouveaux ongles !
    </p>
    <button class="bg-pink-500 rounded-3xl py-2 px-8 mt-20 hover:opacity-45">Boutique</button>
  </div>
  <div class="bg-pink-100 text-2xl md:text-4xl py-20">
    Qualité, rapidité, et personnalisation totale pour un style irréprochable
  </div>
  <div class="flex flex-col md:flex-row ml-4 m-8 items-center md:justify-around bg-">
    <img src="/public/kit.webp" alt="kit d'application" class="w-[45%] lg:w-[25%]" />
    <div class="w-[45%] ml-4">
      <div>Avec chaque set de press on nails est fourni un kit d'application :</div>
      <ul>
        <li>3 feuilles d'autocollants (soit 6 utilisations)</li>
        <li>Un tube de colle</li>
        <li>Une mini lime à ongle</li>
        <li>Un mini buffer</li>
        <li>Un batonnêt réutilisable (ou 6 batonnêts de bois)</li>
        <li>6 lingettes d'alcool</li>
      </ul>
      <button class="bg-pink-500 rounded-3xl py-2 px-8 mt-20 hover:opacity-45">Comment les appliquer ?</button>
    </div>
  </div>
</template>
