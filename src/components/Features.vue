<script setup>
import axios from "axios";
import { ref, onMounted } from 'vue';

const response = ref(null);
const numbers = ref([]);

numbers.value = (() => {
  const set = new Set();

  while (true) {
    set.add(Math.floor(Math.random() * 19));

    if (set.size === 3) {
      return set;
    }
  }
})();


onMounted(async () => {
  response.value = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_KEY}`);
})
</script>

<template>
  <div class="movie-gallery">
    <div v-if="response" class="movie-list">
      <div v-for="number in numbers" :key="response.data.results[number].id" class="movie-card">
        <img :src="`https://image.tmdb.org/t/p/w500${response.data.results[number].poster_path}`" alt="Movie Poster" class="movie-poster" />
        <p class="movie-title">{{ response.data.results[number].title }}</p>
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

body {
    font-family: Arial, sans-serif;
    background-color: #121212;
    color: #ffffff;
    line-height: 1.6;
}

.movie-gallery {
    display: flex;
    justify-content: center;
    padding: 20px;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 20px;
}

.movie-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    width: 100%;
    max-width: 1200px;
}

.movie-card {
    background-color: #1f1f1f;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-align: center;
}

.movie-card:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.7);
}

.movie-poster {
    width: 100%;
    height: 300px; 
    object-fit: cover;
    border-bottom: 3px solid #ff4081; 
}

.movie-title {
    font-size: 1.1rem;
    color: #ffffff;
    margin: 15px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
</style>