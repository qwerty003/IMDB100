<template>
    <v-container>
    </v-container>
</template>

<script>
import axios from 'axios'
export default {
    name: 'HelloWorld',

    data () {
    return {
      users: []
    }
  },
    mounted () {
      const baseURI = 'https://api.themoviedb.org/3/movie/550?api_key=9f2bd26a95f885503eb188a463f709f5'
      axios(baseURI)
      .then((result) => {
        this.users = result.data
      })
    }
};
</script>
