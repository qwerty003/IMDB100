<template>
    <v-card color="grey lighten-4" flat height="80px">
        <v-toolbar extended extension-height="10" color="black" dark>
            <v-btn class="mx-2" fab dark color="pink" to="/"><v-icon dark>100 </v-icon></v-btn>
            <v-btn class="mx-2" fab dark small color="pink" to="/search"><v-icon dark>mdi-pencil</v-icon></v-btn>
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