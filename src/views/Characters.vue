<template>
  <v-container>
    <h1>Characters</h1>
    <v-toolbar
        dark
        flat
    >
      <v-text-field
          v-model="searchCharacter"
          class="mx-4"
          flat
          hide-details
          label="Search"
          prepend-inner-icon="mdi-magnify"
          solo-inverted
      ></v-text-field>
    </v-toolbar>
    <div v-if="searchedCharacters.length">
      <div class="cards">
        <v-card flat
                color="#385F73"
                dark
                :max-width="width"
                class="mb-2 mt-0 mr-auto ml-auto"
                v-for="(character, i) in searchedCharacters"
                :key="i"
        >
          <v-img
              :width="width"
              :src="character.image"></v-img>
          <v-card-title>
            {{ character.name }}
          </v-card-title>
          <v-card-subtitle class="red--text" :class="{'green--text' : character.status.toLowerCase() === 'alive'}">
            {{ character.status }}
          </v-card-subtitle>
          <v-card-actions>
            <router-link tag="button" :to="{name: 'idChars', params: {id: character.id}}">
              <v-btn
                  class="mt-3"
              >
                Details
                <v-icon class="ml-2">mdi-application-import</v-icon>
              </v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </div>
      <div class="custom-button">
        <v-btn
            class="ma-2"
            color="success"
            @click="loadMore"
            v-show="showButton"
        >
          Load more
        </v-btn>
      </div>
    </div>
    <div v-else>
      there a no results.
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Characters",
  data () {
    return {
      width: 350,
      searchCharacter: '',
    }
  },
  computed: {
    characters(){
      return this.$store.getters.characters;
    },
    next(){
      return this.$store.getters.characterNext;
    },
    searchedCharacters(){
      return this.characters
          .filter(character =>{
            return(character.name.toLowerCase().indexOf(this.searchCharacter.toLowerCase()) !== -1);
          });
    },
    showButton(){
      return this.next && this.searchCharacter === '' ? true : false;
    }
  },
  methods: {
    loadMore(){
      this.$store.dispatch('initCharacters', this.next);
    }
  },
  created(){
    if(!this.characters.length){
      this.$store.dispatch("initCharacters");
    }
  },
}
</script>

<style scoped>
  .cards{
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
  }
  .custom-button{
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
  @media(max-width:700px){
    .cards{
      display: block;
    }
  }
</style>