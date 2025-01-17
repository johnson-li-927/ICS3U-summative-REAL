<script setup>
import { useRegistrationStore } from '@/stores/counter';
import { useRouter } from 'vue-router';
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

const store = useRegistrationStore();
const router = useRouter();
const validateForm = (event) => {
  if (store.password !== store.repassword) {
    event.preventDefault(); 
    alert('Passwords do not match')
  } else {
    store.setRegistrationData({
      firstName: store.firstName,
      lastName: store.lastName,
      email: store.email,
      password: store.password,
    });

    router.push("/movies")
  }
};
</script>

<template>
    <Header />
    <div class="hero">
      <div class="overlay">
        <div class="form-container">
          <h2>Create an Account</h2>
          <form @submit="validateForm">
            <input type="text" placeholder="First Name" class="input-field" v-model="store.firstame" required>
            <input type="text" placeholder="Last Name" class="input-field" v-model="store.lastname" required>
            <input type="email" placeholder="Email" class="input-field" v-model="store.email" required>
            <input type="password" placeholder="Password" class="input-field" v-model="store.password" required>
            <input type="password" placeholder="Re-Enter Password" class="input-field" v-model="store.repassword" required>
            <button type="submit" class="button register">Register</button>
          </form>
        </div>
      </div>
    </div>
  <Footer />
  </template>

<style scoped>
body {
    font-family: Arial, sans-serif;
    color: #ffffff;
    background-color: #121212;
    line-height: 1.6;
}


.hero {
    position: relative;
    height: 100vh; 
    background: url('your-image-url.jpg') no-repeat center center/cover; 
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
}

.hero .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Dark semi-transparent overlay */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.navbar {
    position: absolute;
    top: 20px;
    left: 20px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    padding: 0 20px;
}

.navbar img {
    width: 70px; 
}

.navbar .button {
    background-color: #ff4081;
    color: #ffffff;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
}

.navbar .button:hover {
    background-color: #e91e63;
}

.form-container {
    background-color: rgba(0, 0, 0, 0.7); 
    padding: 30px;
    border-radius: 10px;
    max-width: 400px;
    width: 100%;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
    text-align: center;
}

.form-container h2 {
    font-size: 2em;
    margin-bottom: 20px;
    color: #ffffff;
}

.input-field {
    width: 100%;
    padding: 15px;
    margin: 10px 0;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    transition: border-color 0.3s;
}

.input-field:focus {
    outline: none;
    border: 2px solid #ff4081; 
}

.button.register {
    width: 100%;
    padding: 15px;
    background-color: #ff4081;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.2rem;
    margin-top: 15px;
    transition: background-color 0.3s;
}

.button.register:hover {
    background-color: #e91e63;
}
</style>
