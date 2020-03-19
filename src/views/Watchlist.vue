<template>
    <v-container fluid>
        <navigation></navigation>
        <modaltest v-if="detail"></modaltest>
            <watchcontent></watchcontent>
    </v-container>
</template>

<script>
import navigation from '@/components/navigation';
import modaltest from '@/components/modaltest';
import watchcontent from '@/components/watchcontent';
export default {
    name: 'Watchlist',
    components: {
        navigation,
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
