<script setup>
import { useStore } from '../stores/counter';
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
const store = useStore();
</script>

<template>
  <Header />
  <div class="cart">
    <h1>Your Cart</h1>
    <div class="item" v-for="([key, value]) in store.cart" :key="key">
      <img :src="`https://image.tmdb.org/t/p/w500${value.url}`" alt="Movie Poster" />
      <h2>{{ value.title }}</h2>
      <button @click="store.removeFromCart(key)">Remove</button>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.cart {
    background-color: #1f1f1f;
    color: #fff;
    font-family: 'Arial', sans-serif;
    padding: 30px;
    max-width: 1200px;
    margin: 0 auto;
    border-radius: 10px;
}

.cart h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #ff4081;
    text-align: center;
    margin-bottom: 20px;
}

.item {
    display: flex;
    align-items: center;
    background-color: #2c2c2c;
    padding: 15px;
    margin: 15px 0;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
}

.item:hover {
    transform: scale(1.05);
}

.item img {
    width: 80px;
    height: 120px;
    object-fit: cover;
    border-radius: 5px;
    margin-right: 20px;
}

.item h2 {
    font-size: 1.3rem;
    color: #fff;
    flex: 1;
}

.item button {
    background-color: #ff4081;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.item button:hover {
    background-color: #e91e63;
}

</style>
