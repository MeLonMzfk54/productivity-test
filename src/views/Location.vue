<template>
  <elem-display @show-chars="showChars" :characters="characters" :reveal="reveal">

    <template v-slot:info>
      <div>{{ location.type }}</div>
      <p class="text-h4 text--primary">
        {{ location.name }}
      </p>
      <p>dimension - {{ location.dimension }}</p>
    </template>

    <template v-slot:listName>
      Characters List
    </template>
    <template v-slot:buttonName>
      Residents
    </template>
  </elem-display>
</template>
<script>
import elemDisplay from "@/components/elemDisplay";

export default {
  name: "Location",
  data(){
    return{
      reveal: false,
      location: {},
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
        this.location.residents.map(el => {
          this.axios.get(el).then(response =>{
            this.characters.push({id: response.data.id, name: response.data.name, image: response.data.image});
          }).catch(error => console.log(error));
        });
      }
    }
  },
  created(){
    this.axios.get(`https://rickandmortyapi.com/api/location/${this.$route.params.id}`)
        .then((response) =>{
          this.location = response.data;
        }).catch(error =>{
      console.log(error);
    });
  },
}
</script>