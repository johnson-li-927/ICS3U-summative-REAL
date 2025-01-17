<script setup>
import { useRegistrationStore } from '../stores/counter';
import { computed } from 'vue';
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

const userStore = useRegistrationStore();

const firstName = computed({
  get: () => userStore.firstName,
  set: (value) => {
    userStore.firstName = value;
  },
});
const lastName = computed({
  get: () => userStore.lastName,
  set: (value) => {
    userStore.lastName = value;
  },
});
const email = computed({
  get: () => userStore.email,
  set: (value) => {
    userStore.email = value;
  },
});

const updateProfileHandler = (event) => {
  event.preventDefault();
  userStore.setRegistrationData({
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
  });

  alert('Profile updated successfully!');
}
</script>

<template>
  <Header />
  <div class="form-container">
    <h1>User Profile</h1>
    <form @submit="updateProfileHandler">
      <label for="firstName">First Name:</label>
      <input type="text" id="firstName" class="input-field" v-model="firstName" /><br /><br />
      <label for="lastName">Last Name:</label>
      <input type="text" id="lastName" class="input-field" v-model="lastName" /><br /><br />
      <label for="email">Email:</label>
      <input type="email" id="email" class="input-field" v-model="email" readonly/><br /><br />
      <button type="submit" class="button">Save Changes</button>
    </form>
  </div>
  <Footer />
</template>

