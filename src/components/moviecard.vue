<template>
<v-container>
  <a @click="display">
      <v-row dense>
        <v-col cols="12">
          <v-card color="purple" dark>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                  v-text= title
                ></v-card-title>

                <v-card-subtitle v-text= "release"></v-card-subtitle>
                <p>Vote count : {{votes}}</p>
                <div v-on:click.stop="changewatchstatus()">
                <v-btn v-if="watchlisted()" icon color="pink">
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn v-else icon disabled>
                  <v-icon >mdi-heart</v-icon>
                </v-btn>
                </div>
              </div>

              <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img :src="'https://cdn.vuetifyjs.com/images/cards/foster.jpg'"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </a>
</v-container>
</template>

<script>
export default {
    name: 'moviecard',
    props:['id','title','rating','release','votes','watchlist'],
     data () {
    return {
        movieid: this.$props.id,
    }
    },
    methods: {
        display(){
            this.$store.commit('displaymovie', this.movieid);
            this.$store.dispatch('displaymodal');
        },
        watchlisted(){
          return this.$store.getters.watchstatus(this.movieid)
        },
        changewatchstatus(){
          this.$store.commit('changewatch', this.movieid);
        }
    },
};
</script>

<style scoped>
p{
  margin-top: -10px;
  padding-left: 15px;
  color: gray;
}

</style>