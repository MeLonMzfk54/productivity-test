<template>
  <div>
    <v-app-bar
        color="#385F73"
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
  </div>
</template>

<script>
import routesMixin from "@/mixins/routesMixin";

export default{
  name: "Header",
  mixins: [routesMixin],
  data(){
    return{
      drawer: false,
      group: null,
    }
  },
}
</script>