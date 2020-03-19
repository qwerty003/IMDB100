import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new
Vuex.Store({
    state: {
        movies: [],
        display: {},
        showmodal:false
    },
    getters: {
        displayid: (state) => (id) => {
            return state.movies.filter(movie => movie.id==id)[0]
        },
        watchstatus: (state) => (id) => {
            return state.movies.filter(movie => movie.id==id)[0].watch
        },
        watchlistmovies: (state) => {
            return state.movies.filter(movie => movie.watch==true)
        },
        searchresults: (state) => (str) => {
            return state.movies.filter(movie => movie.title.toLowerCase().includes(str.toLowerCase()))
        },
        modalstatus: (state) => {
            return state.showmodal
        },
    },
    mutations: {
        setmovies(state) {
            const baseURI = 'https://api.themoviedb.org/3/movie/top_rated?api_key=9f2bd26a95f885503eb188a463f709f5&language=en-US'
            axios(baseURI).then((result) => {
            let response = result.data.results;
            response.forEach(function(movie) { movie.watch = false });
            state.movies = response;
            })
        },
        displaymovie (state, id){
            state.display = state.movies.filter(movie => movie.id==id)[0];
        },
        displaymodal (state){
            state.showmodal = true;
        },
        hidemodal (state){
            state.showmodal = false;
        },
        changewatch(state,id){
            state.movies.filter(movie => movie.id==id)[0].watch = !(state.movies.filter(movie => movie.id==id)[0].watch)
        }
    },
    actions: {
        getmovies (context){
            context.commit('setmovies');
        },
        async displaymodal (context){
            context.commit('displaymodal')
        },
        async hidemodal (context){
            context.commit('hidemodal')
        }
    },
    modules: {}
});
