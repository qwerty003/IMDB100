<template>
    <v-container grid-list-lg>
       <v-layout row>
        <moviecard v-for="movie in movies" :key="movie.id" :id="movie.id" :title="movie.title" :rating="movie.vote_average" :release="movie.release_date" :votes="movie.vote_count" :watchlist="movie.watch" :imagesrc="movie.backdrop_path"></moviecard>
        </v-layout>
    </v-container>
</template>

<script>
import moviecard from '@/components/moviecard';
export default {
    name: 'moviecontent',
    components: {
        moviecard 
    },
    computed : {
        movies(){
            return this.$store.state.movies
        }
    },
};
</script>

<style scoped>

</style>