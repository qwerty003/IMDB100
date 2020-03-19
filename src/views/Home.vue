<template>
    <v-container fluid>
        <modaltest v-if="detail"></modaltest>
            <moviecontent></moviecontent>
    </v-container>
</template>

<script>
import modaltest from '@/components/modaltest';
import moviecontent from '@/components/moviecontent';
export default {
    name: 'Home',
    components: {
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
