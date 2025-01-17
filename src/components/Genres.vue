<script setup>
import axios from "axios";
import { ref, onMounted } from 'vue';
import { useRouter } from "vue-router";
import { useStore } from '../stores/counter';

const props = defineProps(["genres"]);
const router = useRouter();
const store = useStore();
const selectedGenre = ref(28);
const response = ref(null);
const genres = [
  { id: 28, genreName: 'Action' },
  { id: 12, genreName: 'Adventure' },
  { id: 27, genreName: 'Horror' },
  { id: 10751, genreName: 'Family' },
  { id: 36, genreName: 'History' },
];

async function getMovieByGenre() {
  response.value = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&include_adult=false&with_genres=${selectedGenre.value}`);
}

function getMovieDetails(id) {
  router.push(`/movies/${id}`)
}

onMounted(async () => {response.value = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&include_adult=false&with_genres=${selectedGenre.value}`);
})
</script>

<template>
  <div class="movie-gallery">
    <select v-model="selectedGenre" @change="getMovieByGenre()">
      <option v-for="genre of genres" :value="genre.id">{{ genre.genreName }}</option>
    </select>
    <div v-if="response" class="movie-list">
      <div v-for="movie in response.data.results" :key="movie.id" class="movie-card">
        <div @click="getMovieDetails(movie.id)">
          <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="Movie Poster" class="movie-poster" />
          <p class="movie-title">{{ movie.title }}</p>
        </div>
        <button v-if='!store.cart.has(movie.id)'
          @click="store.addToCart(movie.id, { title: movie.title, url: movie.poster_path })" class="buy">
          Buy
        </button>
        <button v-else class='buy'>
          Added
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.movie-gallery {
    padding: 20px;
    background-color: #1f1f1f;
    min-height: 100vh;
}
select {
    background-color: #333333;
    color: #ffffff;
    border: 1px solid #ff4081;
    border-radius: 5px;
    padding: 10px;
    width: 100%;
    max-width: 300px;
    margin-bottom: 20px;
    font-size: 1rem;
    transition: all 0.3s ease;
}

select:hover {
    background-color: #e91e63;
}
.movie-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 20px;
}
.movie-card {
    background-color: #2c2c2c;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.movie-card:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
}
.movie-poster {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-bottom: 2px solid #e91e63;
}
.movie-title {
    text-align: center;
    color: #ffffff;
    font-size: 1.2em;
    font-weight: bold;
    padding: 10px;
    background-color: #333333;
    border-top: 2px solid #e91e63;
}

.buy {
    background-color: #ff4081;
    color: #ffffff;
    border: none;
    padding: 10px;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 5px;
    width: 100%;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 10px;
}

.buy:hover {
    background-color: #e91e63;
}

.buy:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}

.movie-card button.added {
    background-color: #ffb74d;
}

select option {
    font-size: 1rem;
}
</style>