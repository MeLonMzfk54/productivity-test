<template>
  <v-container>
    <h1>Episodes</h1>
      <v-toolbar
          dark
          flat
      >
        <v-text-field
            v-model="searchEpisode"
            class="mx-4"
            flat
            hide-details
            label="Search"
            prepend-inner-icon="mdi-magnify"
            solo-inverted
        ></v-text-field>
        <template v-slot:extension>
          <v-tabs
              v-model="tabs"
              centered
          >
            <v-tab
                v-for="n in seasons.length"
                :key="n"
            >
              season{{ n }}
            </v-tab>
          </v-tabs>
          <div class="custom-tabs__arrow"></div>
        </template>
      </v-toolbar>

      <v-tabs-items v-model="tabs">
        <v-tab-item v-for="n in seasons.length"
                    :key="n">
          <v-card flat
                  color="#385F73"
                  dark
                  class="mb-2 mt-0"
                  v-for="(episode, i) in seasonsList[n-1]"
                  :key="i"
          >
            <v-card-title>
              {{ episode.name }}
            </v-card-title>
            <v-card-subtitle>
              {{ episode.episode }}
            </v-card-subtitle>
            <v-card-text>
              {{ episode.air_date }}
            </v-card-text>
            <v-card-actions>
              <router-link tag="button" :to="{name: 'idEpisodes', params: {id: episode.id}}">
                <v-btn
                    class="mt-3"
                >
                  Details
                  <v-icon class="ml-2">mdi-application-import</v-icon>
                </v-btn>
              </router-link>
            </v-card-actions>
          </v-card>
          <div v-if="seasonsList[n-1].length <= 0">
            there a no results.
          </div>
        </v-tab-item>
      </v-tabs-items>
  </v-container>
</template>

<script>
export default {
  name: "Episodes",
  data () {
    return {
      searchEpisode: '',
      tabs: null,
    }
  },
  computed: {
    episodes(){
      return this.$store.getters.episodes;
    },
    seasons(){
      let count = new Set();
      this.episodes.map((el) => count.add(el.episode.slice(0,4)));
      return Array.from(count);
    },
    searchedEpisodes(){
      return this.episodes
      .filter(episode =>{
          return(episode.name.toLowerCase().indexOf(this.searchEpisode.toLowerCase()) !== -1);
      });
    },
    seasonsList(){
      let arr = [];
      for(let i = 0; i < this.seasons.length; i++){
        arr.push([]);
        this.searchedEpisodes.map( el => {
          if(el.episode.trim().toLowerCase().includes(this.seasons[i].trim().toLowerCase()))
          arr[i].push(el);
        });
      }
      return arr;
    },
  },
  created(){
    if(!this.episodes.length) {
      this.$store.dispatch("initEpisodes");
    }
  },
  mounted() {
    if(window.outerWidth <= 560){
      setTimeout(() =>{
        document.querySelector('.custom-tabs__arrow').style.display = "none";
      }, 5000)
    }
  }
}

</script>

<style scoped lang="scss">
@media(max-width:560px){
  .custom-tabs__arrow{
      position: relative;
      &:after{
        content: "";
        position: absolute;
        width: 25px;
        height: 25px;
        background: url('../assets/images/arrow.svg');
        transform: rotate(-90deg);
        background-size: cover;
        top: -12px;
        right: -10px;
        animation-name: arrowMove;
        animation-duration: 1.5s;
        animation-iteration-count:infinite;
      }
    }
}
@keyframes arrowMove {
  0% {
    right: -10;
  }
  50%{
    right: -25px;
  }
  100%{
    right: -10px;
  }
}
</style>