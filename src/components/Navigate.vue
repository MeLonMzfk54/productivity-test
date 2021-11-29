<template>
  <v-bottom-navigation
      color="teal"
      grow
  >
    <v-btn
        v-for="(item, i) in menuItems"
        :key="i"
        @click="switchUrl(item.link)"
    >
      <span>{{ item.title }}</span>

      <v-icon>{{ item.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
import routesMixin from "@/mixins/routesMixin";
export default {
  name: "NavigateComponent",
  mixins: [routesMixin],
}
</script>