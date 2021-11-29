<template>
  <v-app>
    <v-card
        height="100vh"
    >
      <v-app-bar
          color="deep-purple"
          dark
      >
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <router-link tag="h2" to="/" style="cursor: pointer">Productivity-test</router-link>
      </v-app-bar>

      <v-navigation-drawer
          v-model="drawer"
          absolute
          temporary
      >
        <v-list
            nav
            dense
        >
          <v-list-item-group
              v-model="group"
              active-class="deep-purple--text text--accent-4"
          >
            <v-list-item v-for="(item, i) in menuItems" :key="i"
            @click="switchUrl(item.link)"
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <v-main>
          <router-view/>
      </v-main>
    </v-card>
  </v-app>
</template>

<script>
import routesMixin from "@/mixins/routesMixin";
export default {
  name: 'App',
  mixins: [routesMixin],
  data(){
    return{
      drawer: false,
      group: null,
      showMenu: false,
    }
  },
};
</script>

<style lang="scss">
.container{
  max-width: 1500px;
  padding: 0px 15px;
  margin: 0 auto;
}
  .default{
    &__inner{
      margin-top: 30px;
    }
  }
</style>