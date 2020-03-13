<template>
    <v-container fluid>
        <modaltest v-if="detail"></modaltest>
            <watchcontent></watchcontent>
    </v-container>
</template>

<script>
import modaltest from '@/components/modaltest';
import watchcontent from '@/components/watchcontent';
export default {
    name: 'Watchlist',
    components: {
        modaltest,
        watchcontent
    },
    computed : {
        detail(){
            return this.$store.state.showmodal
        }
    },
};
</script>
