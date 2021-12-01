<template>
  <v-app>
    <Header></Header>
    <v-container>
      <v-main>
          <router-view/>
      </v-main>
      <to-top-button></to-top-button>
    </v-container>
  </v-app>
</template>

<script>
import Header from "@/components/Header"
import ToTopButton from "@/components/ToTopButton";
export default {
  name: 'App',
  components: {
    Header,
    ToTopButton,
  }
};
</script>

<style lang="scss">
  .default{
    &__inner{
      margin-top: 30px;
    }
  }
  @media(max-width:400px){
    .v-item-group.v-bottom-navigation .v-btn{
      min-width: 75px !important;
    }
  }
</style>