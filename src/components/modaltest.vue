<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent min-width="800" max-width="900">
      <v-card @click="hide"
      class="mx-auto"
      min-width="800"
      >
        <v-img
          class="white--text align-end"
          height="450px"
          :src="'http://image.tmdb.org/t/p/w500/'+movie.poster_path">
          <v-card-title>{{movie.title}}</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0">{{movie.vote_average}}</v-card-subtitle>

        <v-card-text class="text--primary" height="400px">
          <hr>
          <div>{{movie.overview}}</div>
        </v-card-text>

        <v-card-actions>
          <div v-on:click.stop="changewatchstatus()">
            <v-btn v-if="watchlisted()" icon color="orange">
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn v-else icon disabled>
              <v-icon >mdi-heart</v-icon>
            </v-btn>
          </div>

          <v-btn
            color="orange"
            text
          >
            <v-icon>mdi-share</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>


<script>
  export default {
    name: 'modaltest',
    data () {
      return {
        dialog:() => {return  this.$store.getters.modalstatus},
      }
    },
    computed : {
        movie(){
            return this.$store.state.display
        }
    },
    methods: {
        hide(){
            this.$store.dispatch('hidemodal');
        },
        watchlisted(){
          return this.$store.getters.watchstatus(this.movie.id)
        },
        changewatchstatus(){
          this.$store.commit('changewatch', this.movie.id);
        }
    },
  }
</script>