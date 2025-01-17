<script setup>
import { RouterLink, useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const password = ref('');

const handleLogin = () => {
  if (password.value === "popper927") {
    router.push("/movies");
  } else {
    alert("Invalid Password");
  }
};
</script>

<template>
  <div class="hero">
    <div class="overlay">
      <div class="navbar">
        <img src="../assets/Black And White Modern Typographic Simple Virus Apparel Logo (7 x 11 in) (40 x 40 px) (70 x 40 px).png" alt="">
        <RouterLink to="/register" class="button register">Register</RouterLink>
      </div>
      <div class="form-container">
        <h2>Login to Your Account</h2>
        <form @submit.prevent="handleLogin">
          <input type="email" placeholder="Email" class="input-field" required />
          <input v-model:="password" type="password" placeholder="Password" class="input-field" required />
          <button type="submit" class="button login">Login</button>
        </form>
      </div>
    </div>
  </div>
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
    background: url('your-image-url.jpg') no-repeat center center/cover; 
    height: 100vh; 
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
    background-color: rgba(0, 0, 0, 0.5); 
    display: flex;
    justify-content: center;
    align-items: center;
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

.navbar h1 {
    font-size: 2.5em;
    font-weight: 700;
    color: #ffffff;
}

.navbar .button {
    background-color: #ff4081;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    text-decoration: none;
    transition: background-color 0.3s;
}

.navbar .button:hover {
    background-color: #e91e63;
}


.form-container {
    text-align: center;
    background-color: rgba(0, 0, 0, 0.7); 
    padding: 30px;
    border-radius: 10px;
    max-width: 400px;
    width: 100%;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
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
}

.input-field:focus {
    outline: none;
    border: 2px solid #ff4081; 
}

.button.login {
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

.button.login:hover {
    background-color: #e91e63;
}
</style>