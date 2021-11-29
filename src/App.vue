<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      class="header"
    >
      <router-link tag="div" to="/" class="d-flex align-center header__logo">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <h2>Productivity-test</h2>
      </router-link>

      <v-spacer></v-spacer>
      <div
      v-if="!showMenu">
        <v-btn
            v-for="(item, i) in menuItems"
            :key="i"
            @click="switchUrl(item.link)"
            text
        >
          <span>{{ item.title }}</span>
        </v-btn>
      </div>

      <v-menu
          bottom
          left
          v-else
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              dark
              icon
              v-bind="attrs"
              v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
              v-for="(item, i) in menuItems"
              :key="i"
              @click="switchUrl(item.link)"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  created(){
    if(window.outerWidth < 644){
      this.showMenu = true;
    }
  },
  data(){
    return{
      showMenu: false,
      menuItems: [
        {title: "Characters", link: "/Characters"},
        {title: "Episodes", link: "/Episodes"},
        {title: "Locations", link: "/Locations"},
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