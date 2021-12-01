<template>
  <v-card
      class="mx-auto mt-5"
      max-width="500"
  >
    <v-card-text>
      <slot name="info"></slot>
    </v-card-text>
    <v-card-actions>
      <v-btn
          text
          color="teal accent-4"
          @click="showChars"
      >
        <slot name="buttonName"></slot>
      </v-btn>
      <v-btn
          text
          color="teal accent-4"
          @click="$router.go(-1)"
      >
        Back
      </v-btn>
    </v-card-actions>
    <v-card v-if="reveal">
      <v-card-text class="pb-0">
        <p class="text-h4 text--primary">
          <slot name="listName"></slot>
        </p>
      </v-card-text>
      <v-list three-line>
        <v-list-item
            v-for="(char, index) in characters"
            :key="index"
            style="min-height: auto"
        >
          <v-list-item-avatar>
            <v-img :src="char.image"></v-img>
          </v-list-item-avatar>

          <v-list-item-content class="">
            <v-list-item-title v-html="char.name"></v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <router-link tag="button" :to="{name: 'idChars', params: {id: char.id}}">
              <v-btn icon>
                <v-icon color="grey lighten-1">mdi-information</v-icon>
              </v-btn>
            </router-link>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-card-actions class="pt-0">
        <v-btn
            text
            color="teal accent-4"
            @click="reveal = false"
        >
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-card>
</template>

<script>
export default{
  props: ['characters','reveal'],
  methods: {
    showChars(){
      this.$emit("show-chars");
    }
  }
}
</script>