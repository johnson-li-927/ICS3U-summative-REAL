<script setup>
import { RouterLink } from 'vue-router';
import { useStore } from '../stores/counter';
const store = useStore();

const logout = () => {
  store.logout();
};
</script>

<template>
  <div class="header">
    <nav>
      <ul class="navlist">
        <img src="../assets/Black And White Modern Typographic Simple Virus Apparel Logo (7 x 11 in) (40 x 40 px) (70 x 40 px).png" alt="">
        <div class="buttons">
          <li v-if="$route.path === '/'">
            <RouterLink to="/login" class="button login">Login</RouterLink>
            <RouterLink to="/register" class="button register">Register</RouterLink>
          </li>
          <li v-if="$route.path === '/movies' || $route.path === '/setting' || $route.path === '/cart'">
            <h1 class="email">{{ `Hello ${store.user?.displayName}!` }}</h1>
            <RouterLink to="/setting" class="button setting">Setting</RouterLink>
            <RouterLink to="/cart" class="button cart">Cart</RouterLink>
            <RouterLink to="/movies" class="button setting">Movies</RouterLink>
            <button @click="logout" class="button setting">Logout</button>
          </li>
          <li v-if="$route.path === '/login' || $route.path === '/register'">
            <RouterLink to="/" class="button setting">Home</RouterLink>
          </li>
        </div>
      </ul>
    </nav>
  </div>
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

.header {
  background-color: #1f1f1f;
  padding: 15px 0;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: relative;
}

nav .logo {
  font-size: 1.8rem;
  font-weight: bold;
  color: #ffffff;
  text-transform: uppercase;
}

nav .buttons {
  display: flex;
  align-items: center;
  margin-left: auto; 
}

nav .button {
  background-color: #ff4081;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1rem;
  display: inline-block;
  margin-left: 10px;
  transition: background-color 0.3s ease;
}

nav .button:hover {
  background-color: #e91e63;
}

nav .login {
  background-color: #ff4081;
}

nav .register {
  background-color: #ff4081;
}

nav .setting {
  background-color: #ff4081;
}

nav .cart {
  background-color: #ff4081;
}
nav .email {
  font-size: 1rem;
  color: #ffffff;
  margin-right: 20px;
}
  </style>
  