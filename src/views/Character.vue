<template>
  <div>
    <v-card

        class="mx-auto mt-5"
        max-width="500px"
        outlined
    >
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="text-h5 mb-1">
            {{ character.name }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ character.species }}</v-list-item-subtitle>
          <v-list-item-subtitle>{{ character.gender }}</v-list-item-subtitle>
          <v-list-item-subtitle>origin - {{ character.origin.name }}</v-list-item-subtitle>
          <v-list-item-subtitle>location - {{ character.location.name }}</v-list-item-subtitle>
          <v-list-item-subtitle>status - <span class="red--text" :class="{'green--text' : character.status.toLowerCase() === 'alive'}">{{ character.status }}</span></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar
            tile
            size="120"
            color="grey"
        >
          <v-img :src="character.image"></v-img>
        </v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
        <v-btn
            outlined
            rounded
            text
            @click="showEpisodes"
        >
          episodes with {{ character.name }}
        </v-btn>
        <v-btn
            text
            color="teal accent-4"
            @click="$router.go(-1)"
        >
          Back
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-card style="max-width: 500px" class="mx-auto" v-if="reveal">
      <v-card-text class="pb-0">
        <p class="text-h4 text--primary">
          Episodes list
        </p>
      </v-card-text>
      <v-list three-line>

        <v-list-item
            v-for="(episode, index) in episodes"
            :key="index"
            style="min-height: auto"
        >
          <v-list-item-content >
            <v-list-item-title>name - {{ episode.name }}</v-list-item-title>
            <v-list-item-title>{{ episode.episode }}</v-list-item-title>
            <v-list-item-title>{{ episode.date }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <router-link tag="button" :to="{name: 'idEpisodes', params: {id: episode.id}}">
              <v-btn icon>
                <v-icon color="grey lighten-1">mdi-information</v-icon>
              </v-btn>
            </router-link>
          </v-list-item-action>
        </v-list-item>

      </v-list>
      <v-card-actions class="pt-0">
        <v-btn
            text
            color="teal accent-4"
            @click="reveal = false"
        >
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default{
  name: "Character",
  data(){
    return{
      reveal: false,
      character: {},
      episodes: [],
    }
  },
  methods: {
    showEpisodes(){
      this.reveal = !this.reveal;
      if(!this.episodes.length){
        this.character.episode.map(el => {
          this.axios.get(el).then(response =>{
            this.episodes.push({id: response.data.id, name: response.data.name, episode: response.data.episode, date: response.data.air_date});
          }).catch(error => console.log(error));
        });
      }
    }
  },
  created(){
    this.axios.get(`https://rickandmortyapi.com/api/character/${this.$route.params.id}`)
        .then((response) =>{
          this.character = response.data;
        }).catch(error =>{
      console.log(error);
    });
  },
}
</script>

<style scoped>
.v-list-item__subtitle{
  border-bottom: 1px solid grey;
  margin-bottom: 5px;
}
.v-list-item__title{
  margin-bottom: 10px !important;
}
@media(max-width:560px){
  .v-card__actions{
    flex-direction: column ;
  }
  .v-btn.v-size--default{
    font-size: 0.775rem;
  }
  .v-list-item__title{
    text-overflow: initial;
    white-space: normal;
  }
}
</style>