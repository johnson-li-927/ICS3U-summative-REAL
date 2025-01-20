<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { useRouter } from "vue-router";
import { useStore } from '../stores/counter';
import { updatePassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { ref } from 'vue';

const store = useStore();
const router = useRouter();
const name = ref(store.user?.displayName?.split(" ")[0] || '');
const lastName = ref(store.user?.displayName?.split(" ")[1] || '');
const email = ref(store.user?.email || '');
const password = ref('');

const isEmailProvider = store.user?.providerData.some(provider => provider.providerId === 'password');

const changeName = async () => {
  if (!isEmailProvider) {
    alert("Information can only be changed when signed in with email");
    return;
  }
  try {
    const user = auth.currentUser;
    if (user) {
      await updateProfile(user, { displayName: `${name.value} ${lastName.value}` });

      store.user = user;
      alert("Name updated");
    }
  } catch (error) {
    console.error("Error in name change:", error);
    alert("There was an error. Please try again.");
  }
};

const changePassword = async () => {
  if (!isEmailProvider) {
    alert("Password can only be changed when signed in with email");
    return;
  }
  try {
    const user = auth.currentUser;
    await updatePassword(user, password.value);
    alert("Password updated");
    password.value = '';
  } catch (error) {
    alert("There was an error. Please try again.");
  }
};
</script>

<template>
  <Header />
  <div class="form-container">
    <h1>User Profile</h1>
    <form @submit.prevent="changeName" class="form">
      <div class="input-container">
        <p>{{ `First Name: ${name}` }}</p>
        <input v-model="name" type="text" id="name" class="input-field" />
        <button type="submit" class="changeName">Change</button>
      </div>
    </form>
    <form @submit.prevent="changeName" class="form">
      <div class="input-container">
        <p>{{ `Last Name: ${lastName}` }}</p>
        <input v-model="lastName" type="text" id="lastName" class="input-field" />
        <button type="submit" class="changeName">Change</button>
      </div>
    </form>
    <div class="email">
      <div class="input-container">
        <p>{{ `Email:` }}</p>
        <input v-model="email" type="email" id="email" class="input-field" readonly />
      </div>
    </div>
    <form @submit.prevent="changePassword" class="form">
      <div class="input-container">
        <p>New Password</p>
        <input v-model="password" type="password" id="password" class="input-field" required />
        <button type="submit" class="changeName">Change Password</button>
      </div>
    </form>
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

.form-container {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #1f1f1f;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.form-container h1 {
  text-align: center;
  font-size: 2rem;
  color: #ffffff;
  margin-bottom: 20px;
}
.form {
  margin-bottom: 20px;
}

.input-container {
  margin-bottom: 20px;
}

.input-field {
  width: 100%;
  padding: 12px;
  margin-top: 8px;
  background-color: #333;
  color: #ffffff;
  border: 1px solid #444;
  border-radius: 5px;
  font-size: 1rem;
}

.input-field:focus {
  outline: none;
  border-color: #ff4081;
  background-color: #2a2a2a;
}

button {
  padding: 10px 20px;
  background-color: #ff4081;
  color: #ffffff;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #e91e63;
}

.email .input-field {
  background-color: #2c2c2c;
  color: #777;
  cursor: not-allowed;
}

</style>

