<template>
    <v-container grid-list-lg>
        <div class="search">
        <v-toolbar
        dense
        floating
        >
        <v-text-field @keyup="search()"
            hide-details
            single-line
        ></v-text-field>

        <v-btn icon color="purple">
            <v-icon>mdi-cached</v-icon>
        </v-btn>
        </v-toolbar>
        </div>
       <v-layout row>
        <moviecard v-for="movie in movies" :key="movie.id" :id="movie.id" :title="movie.title" :rating="movie.vote_average" :release="movie.release_date" :votes="movie.vote_count" :watchlist="movie.watch"></moviecard>
        </v-layout>
    </v-container>
</template>

<script>
import moviecard from '@/components/moviecard';
export default {
    name: 'searchcontent',
    components: {
        moviecard 
    },
    data () {
    return {
        movies : [],
        searchtext: '',
    }
    },
    methods : {
        search(){
            this.searchtext = this.$children[0].$children[0].internalValue
            this.movies =  this.$store.getters.searchresults(this.searchtext)
        }
    },
};
</script>

<style scoped>
.search{
    text-align: center;
}
</style>