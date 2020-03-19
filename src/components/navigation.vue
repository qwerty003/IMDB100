<template>
    <v-card color="grey lighten-4" flat height="80">
        <v-toolbar extended extension-height="6" color="black" dark>
            <v-btn class="mx-2" fab dark small color="pink" to="/"><v-icon dark>mdi-movie-open</v-icon></v-btn>
            <v-btn class="mx-2" fab dark small color="pink" to="/search"><v-icon dark>mdi-movie-search</v-icon></v-btn>
            <v-btn class="mx-2" fab dark small color="pink" to="/watchlist"><v-icon dark>mdi-heart</v-icon></v-btn>
        </v-toolbar>
    </v-card>
</template>

<script>
export default {
    name: 'navigation'
};
</script>

<style scoped>

</style>