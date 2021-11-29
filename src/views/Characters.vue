<template>
  <div>
    Characters
  </div>
</template>

<script>
export default {
  name: "Characters",
  data(){
    return{

    }
  },
  computed: {
    characters(){
      return this.$store.getters.characters;
    }
  },
  created(){
    this.$store.dispatch("initCharacters");
  }
}
</script>