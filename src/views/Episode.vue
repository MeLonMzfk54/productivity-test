<template>
  <elem-display @show-chars="showChars" :characters="characters" :reveal="reveal">

    <template v-slot:info>
      <div>{{ episode.episode }}</div>
      <p class="text-h4 text--primary">
        {{ episode.name }}
      </p>
      <p>{{ episode.air_date }}</p>
    </template>

    <template v-slot:listName>
      Characters List
    </template>
    <template v-slot:buttonName>
      Characters
    </template>
  </elem-display>
</template>
<script>
import elemDisplay from "@/components/elemDisplay"
export default {
  name: "Episode",
  data(){
    return{
      reveal: false,
      episode: {},
      characters: [],
    }
  },
  components: {
    elemDisplay
  },
  methods: {
    showChars(){
      this.reveal = !this.reveal;
      if(!this.characters.length){
        this.episode.characters.map(el => {
          this.axios.get(el).then(response =>{
            this.characters.push({id: response.data.id, name: response.data.name, image: response.data.image});
          }).catch(error => console.log(error));
        });
      }
    }
  },
  created(){
    this.axios.get(`https://rickandmortyapi.com/api/episode/${this.$route.params.id}`)
    .then((response) =>{
      this.episode = response.data;
    }).catch(error =>{
      console.log(error);
    });
  },
}
</script>