<script setup>
import { RouterLink } from 'vue-router';
import { useRegistrationStore } from '../stores/counter';

const registrationStore = useRegistrationStore();
</script>

<template>
    <div class="header">
      <nav>
        <img src="../assets/Black And White Modern Typographic Simple Virus Apparel Logo (7 x 11 in) (40 x 40 px) (70 x 40 px).png" alt="">
        <div class="buttons">
          <div v-if="$route.path === '/'">
            <RouterLink to="/login" class="button login">Login</RouterLink>
            <RouterLink to="/register" class="button register">Register</RouterLink>
          </div>
          <div v-if="registrationStore.email">
            <h1 class="email">Hello {{ registrationStore.firstName }}!</h1>
            <RouterLink to="/" class="button setting">Logout</RouterLink>
            <RouterLink to="/movies" class="button setting">Movies</RouterLink>
            <RouterLink to="/cart" class="button cart">Cart</RouterLink>
            <RouterLink to="/setting" class="button setting">Setting</RouterLink>
          </div>
          <div v-if="$route.path === '/login' || $route.path === '/register'">
            <RouterLink to="/" class="button setting">Home</RouterLink>
          </div>
        </div>
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
  }
  
  nav img {
      width: 60px;
      height: auto;
  }
  
  nav .buttons {
      display: flex;
      align-items: center;
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
  