<template>
    <v-container fluid>
        <modaltest v-if="detail"></modaltest>
        <searchcontent></searchcontent>
    </v-container>
</template>

<script>
import modaltest from '@/components/modaltest';
import searchcontent from '@/components/searchcontent';
export default {
    name: 'Watchlist',
    components: {
        modaltest,
        searchcontent
    },
    computed : {
        detail(){
            return this.$store.state.showmodal
        }
    },
};
</script>

<style scoped>
</style>
