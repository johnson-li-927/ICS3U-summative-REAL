<script setup>
import { ref } from 'vue';
import { useStore } from '../stores/counter';
import { useRouter } from "vue-router";

import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";

const store = useStore();
const router = useRouter();
const thank = ref(false);

const handleCheckout = () => {
    thank.value = true;
    store.clearCart();
};
</script>

<template>
    <Header />
    <div class="cart" v-if="!thank">
        <h1>Shopping Cart</h1>
        <div class="item" v-for="([key, value]) in store.cart">
            <img :src="`https://image.tmdb.org/t/p/w500${value.url}`" />
            <h1>{{ value.title }}</h1>
            <button @click="store.removeFromCart(key)">Remove</button>
        </div>
        <div class="checkout">
            <button @click="handleCheckout">Checkout</button>
        </div>
    </div>
    <div v-else class="message">
            <p>Thank you for purchasing!</p>
        </div>
    <Footer />
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: Arial, sans-serif;
  background-color: #121212;
  color: #ffffff;
  line-height: 1.6;
}

.cart {
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
  background-color: #1f1f1f;
  border-radius: 8px;
}

.cart h1 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
}

.item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background-color: #2c2c2c;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.item img {
  width: 100px;
  height: 150px;
  margin-right: 20px;
  border-radius: 5px;
}

.item h1 {
  font-size: 1.2rem;
  flex-grow: 1;
  color: #ffffff;
}

.item button {
  background-color: #ff4081;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.item button:hover {
  background-color: #e91e63;
}

.checkout {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.checkout button {
  background-color: #4caf50;
  color: white;
  padding: 12px 30px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.checkout button:hover {
  background-color: #45a049;
}

.message {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background-color: #1f1f1f;
  border-radius: 8px;
  margin-top: 40px;
}

.message p {
  font-size: 1.5rem;
  color: #ffffff;
}

footer {
  margin-top: 40px;
  text-align: center;
  color: #ffffff;
}

</style>
