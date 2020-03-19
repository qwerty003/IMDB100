<template>
    <v-container fluid>
        <navigation></navigation>
        <modaltest v-if="detail"></modaltest>
        <searchcontent></searchcontent>
    </v-container>
</template>

<script>
import navigation from '@/components/navigation';
import modaltest from '@/components/modaltest';
import searchcontent from '@/components/searchcontent';
export default {
    name: 'Watchlist',
    components: {
        navigation,
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
