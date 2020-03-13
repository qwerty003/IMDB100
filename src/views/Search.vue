<template>
    <v-container fluid>
        <v-layout>
            <h1 @click="change">{{ show }}</h1>
            <h2 v-if="show">jajaja</h2>
        </v-layout>
    </v-container>
</template>


<script>


export default {
    name: 'Search',
    Components: {

    },
    computed: {
        show(){
            return this.$store.state.showmodal
        }
    },
    methods: {
        change(){
            this.$store.dispatch('hidemodal');
        }
    }
};
</script>



<style scoped>
</style>