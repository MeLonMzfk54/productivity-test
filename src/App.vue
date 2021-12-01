<template>
  <v-app>
    <Header></Header>
    <v-container>
      <v-main>
          <router-view/>
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
import Header from "@/components/Header"
export default {
  name: 'App',
  components: {
    Header
  }
};
</script>

<style lang="scss">
  .default{
    &__inner{
      margin-top: 30px;
    }
  }
</style>