<template>
    <v-container fluid>
        <navigation></navigation>
        <modaltest v-if="detail"></modaltest>
            <moviecontent></moviecontent>
    </v-container>
</template>

<script>
import navigation from '@/components/navigation';
import modaltest from '@/components/modaltest';
import moviecontent from '@/components/moviecontent';
export default {
    name: 'Home',
    components: {
        navigation,
        modaltest,
        moviecontent
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
    }
};
</script>
