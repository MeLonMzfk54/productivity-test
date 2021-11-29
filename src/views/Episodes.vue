<template>
  <div>
    Episodes
  </div>
</template>

<script>
export default {
  name: "Episodes",
  data(){
    return{

    }
  },
  computed: {
    episodes(){
      return this.$store.getters.episodes;
    }
  },
  created(){
    this.$store.dispatch("initEpisodes");
  }
}
</script>