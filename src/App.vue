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

export default {
  name: 'App',
  data(){
    return{
      drawer: false,
      group: null,
      showMenu: false,
      menuItems: [
        {title: "Home", link: "/", icon: "mdi-home"},
        {title: "Characters", link: "/Characters", icon: 'mdi-account'},
        {title: "Episodes", link: "/Episodes", icon: "mdi-folder-multiple-image"},
        {title: "Locations", link: "/Locations", icon: "mdi-image-marker"},
      ]
    }
  },
  methods: {
    switchUrl(url){
      this.$router.push(url);
    }
  }
};
</script>

<style lang="scss">
  .header{
    &__logo{
      cursor: pointer;
    }
  }
</style>