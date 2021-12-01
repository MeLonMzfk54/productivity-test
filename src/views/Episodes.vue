<template>
  <v-container>
    <h1>Episodes</h1>
      <v-toolbar
          dark
          flat
          prominent
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
  }
}
</script>