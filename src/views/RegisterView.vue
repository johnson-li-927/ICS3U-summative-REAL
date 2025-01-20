<script setup>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import { ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import { useStore } from "../stores/counter";
import { createUserWithEmailAndPassword, updateProfile, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const password1 = ref('');
const password2 = ref('');
const router = useRouter();
const store = useStore();

async function signUpWithEmail() {
  if (password1.value !== password2.value) {
    alert("The passwords don't match! Please check and try again.");
    return;
  }
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password1.value);
    const user = userCredential.user;


    await updateProfile(user, { displayName: `${firstName.value} ${lastName.value}` });

    store.user = user;
    router.push("/movies");
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      alert("This email is already in use. Please log in.");
      router.push("/login");
    } else {
      console.error(error);
      alert("Something went wrong. " + error.message);
    }
  }
}


async function signUpWithGoogle() {
  try {

    if (store.user) {
      router.push("/movies");
      return;
    }

    const userCredential = await signInWithPopup(auth, new GoogleAuthProvider());
    const user = userCredential.user;


    if (store.user && store.user.email === user.email) {
      alert("This Google account is already registered.");
      router.push("/login");
      return;
    }

    store.user = user;
    router.push("/movies");
  } catch (error) {
    console.error(error);
    alert("An error occurred while logging in with Google: " + error.message);
  }
}
</script>

  <template>
    <Header />
    <div class="form-container">
      <h2>Create Your Account</h2>
      <form @submit.prevent="signUpWithEmail">
        <input type="text" placeholder="First Name" class="input-field" v-model="firstName" required />
        <input type="text" placeholder="Last Name" class="input-field" v-model="lastName" required />
        <input type="email" placeholder="Email Address" class="input-field" v-model="email" required />
        <input type="password" placeholder="Create Password" class="input-field" v-model="password1" required />
        <input type="password" placeholder="Confirm Password" class="input-field" v-model="password2" required />
        <button type="submit" class="register">Sign Up</button>
      </form>
    </div>
    <button @click="signUpWithGoogle" class="button register">Sign Up with Google</button>
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
  max-width: 500px;
  margin: 40px auto;
  padding: 20px;
  background-color: #1f1f1f;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}


.form-container h2 {
  text-align: center;
  font-size: 2rem;
  color: #ffffff;
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

button.register {
  padding: 12px 20px;
  background-color: #ff4081;
  color: #ffffff;
  font-size: 1.1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  width: 100%;
  transition: background-color 0.3s ease;
}

button.register:hover {
  background-color: #e91e63;
}

button.button.register {
  background-color: #db4437;
  width: 100%;
  margin-top: 15px;
  font-size: 1rem;
}

button.button.register:hover {
  background-color: #c1351d;
}

footer {
  margin-top: 40px;
  text-align: center;
  color: #ffffff;
}
</style>
