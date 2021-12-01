<template>
  <v-container>
    <h1>Locations</h1>
    <v-toolbar
        dark
        flat
        prominent
    >
      <v-text-field
          v-model="searchLocation"
          class="mx-4"
          flat
          hide-details
          label="Search"
          prepend-inner-icon="mdi-magnify"
          solo-inverted
      ></v-text-field>
    </v-toolbar>
    <div class="cards" v-if="searchedLocations.length">
      <v-card flat
              color="#385F73"
              dark
              class="mb-2 mt-0"
              v-for="(location, i) in searchedLocations"
              :key="i"
      >
        <v-card-title>
          planet: {{ location.name }}
        </v-card-title>
        <v-card-subtitle>
          type - {{ location.type }}
        </v-card-subtitle>
        <v-card-text>
          dimension - {{ location.dimension }}
        </v-card-text>
        <v-card-actions>
          <router-link tag="button" :to="{name: 'idLocations', params: {id: location.id}}">
            <v-btn
                class="mt-3"
            >
              Details
              <v-icon class="ml-2">mdi-application-import</v-icon>
            </v-btn>
          </router-link>
        </v-card-actions>
      </v-card>
      <v-btn
          class="ma-2"
          color="success"
          @click="loadMore"
          v-show="showButton"
      >
        Load more
      </v-btn>
    </div>
    <div v-else>
      there a no results.
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Locations",
  data () {
    return {
      searchLocation: '',
    }
  },
  computed: {
    locations(){
      return this.$store.getters.locations;
    },
    next(){
      return this.$store.getters.locationNext;
    },
    searchedLocations(){
      return this.locations
          .filter(location =>{
            return(location.name.toLowerCase().indexOf(this.searchLocation.toLowerCase()) !== -1);
          });
    },
    showButton(){
      return this.next && this.searchLocation === '' ? true : false;
    }
  },
  methods: {
    loadMore(){
      this.$store.dispatch('initLocations', this.next);
    }
  },
  created(){
    if(!this.locations.length){
      this.$store.dispatch("initLocations");
    }
  },
}
</script>

<style scoped>

</style>