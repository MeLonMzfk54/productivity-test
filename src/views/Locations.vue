<template>
  <div>
    Locations
  </div>
</template>

<script>
export default {
  name: "Locations",
  data(){
    return{

    }
  },
  computed: {
    locations(){
      return this.$store.getters.locations;
    }
  },
  created(){
    this.$store.dispatch("initLocations");
  }
}
</script>