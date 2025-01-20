<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

const response = ref(null);
const route = useRoute();

onMounted(async () => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${route.params.id}?api_key=${import.meta.env.VITE_TMDB_KEY}&append_to_response=videos`
    );
    response.value = res.data;
    console.log(response.value);
  } catch (error) {
    console.error("Error fetching movie data:", error);
  }
});
</script>

<template>
<Header />
  <div v-if="response" class="movie-detail">
    <h1 class="movie-title">{{ response.original_title }}</h1>

    <p class="movie-overview">{{ response.overview }}</p>
    <p class="movie-release-date">Release Date: {{ response.release_date }}</p>
    <a class="movie-site" :href="response.homepage" target="_blank">Official Movie Site</a>
    <p class="movie-runtime">Runtime: {{ response.runtime }} minutes</p>
    <p class="movie-rating">Rating: {{ response.vote_average }} / 10</p>
    <p class="movie-language">Language: {{ response.original_language.toUpperCase() }}</p>
    <p class="movie-status">Status: {{ response.status }}</p>
    <img :src="`https://image.tmdb.org/t/p/w500${response.poster_path}`" alt="Movie Poster" class="movie-poster" />
    <h2 class="trailers-title">Trailers</h2>
    <div class="trailers-container">
      <div v-for="trailer in response.videos.results" :key="trailer.id" class="trailer-tile">
        <a :href="`https://www.youtube.com/watch?v=${trailer.key}`" target="_blank">
          <img :src="`https://img.youtube.com/vi/${trailer.key}/hqdefault.jpg`" alt="Trailer"
            class="trailer-thumbnail" />
        </a>
      </div>
    </div>
  </div>
<Footer />
</template>


<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.movie-detail {
    background-color: #1f1f1f;
    color: #fff;
    font-family: 'Arial', sans-serif;
    padding: 30px;
    max-width: 1200px;
    margin: 0 auto;
    border-radius: 10px;
}

.movie-title {
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
    color: #ff4081;
}

.movie-overview {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 20px;
    color: #ddd;
}

.movie-release-date,
.movie-runtime,
.movie-rating,
.movie-language,
.movie-status {
    font-size: 1.1rem;
    margin: 10px 0;
    color: #bbb;
}

.movie-site {
    font-size: 1.1rem;
    color: #ff4081;
    text-decoration: none;
    margin-bottom: 20px;
    display: inline-block;
}

.movie-site:hover {
    text-decoration: underline;
}

.movie-poster {
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin-top: 20px;
    border: 5px solid #333;
}

.trailers-title {
    font-size: 1.8rem;
    font-weight: bold;
    color: #ff4081;
    margin-top: 40px;
    text-align: center;
    margin-bottom: 20px;
}

.trailers-container {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
}

.trailer-tile {
    width: 250px;
    cursor: pointer;
}

.trailer-thumbnail {
    width: 100%;
    height: auto;
    border-radius: 8px;
    transition: transform 0.3s ease;
}

.trailer-thumbnail:hover {
    transform: scale(1.05);
}

@media (max-width: 768px) {
    .movie-title {
        font-size: 2rem;
    }

    .movie-overview {
        font-size: 1rem;
    }

    .movie-release-date,
    .movie-runtime,
    .movie-rating,
    .movie-language,
    .movie-status {
        font-size: 1rem;
    }

    .movie-site {
        font-size: 1rem;
    }

    .trailers-title {
        font-size: 1.5rem;
    }
}
</style>
