<template>
  <div class="home">
    <div class="home__inner default__inner">
      <h1 class="text-lg-h2 text-center home__title">Rick and Morty app</h1>
      <Navigate></Navigate>
    </div>
  </div>
</template>

<script>
  import Navigate from "@/components/Navigate"
  export default {
    name: 'Home',
    components: {
      Navigate,
    }
  }
</script>

<style lang="scss" scoped>
  .home{
    &__title{
      margin-bottom: 20px;
    }
  }
</style>
