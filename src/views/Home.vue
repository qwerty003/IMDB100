<template>
    <v-container fluid>
        <modaltest v-if="detail"></modaltest>
            <moviecontent></moviecontent>
    </v-container>
</template>

<script>
import axios from 'axios'
import modaltest from '@/components/modaltest';
import moviecontent from '@/components/moviecontent';
export default {
    name: 'Home',
    components: {
        modaltest,
        moviecontent
    },

    data () {
    return {
        movies: [],
    }
    },
    computed : {
        detail(){
            return this.$store.state.showmodal
        }
    },
    methods: {
        display(){
            this.$store.dispatch('displaymodal');
        }
    },
    mounted () {
        const baseURI = 'https://api.themoviedb.org/3/movie/top_rated?api_key=9f2bd26a95f885503eb188a463f709f5&language=en-US'
        axios(baseURI).then((result) => {
            this.movies = result.data
        })
    }
};
</script>
