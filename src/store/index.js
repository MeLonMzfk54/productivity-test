import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import axios from 'axios';
export default new Vuex.Store({
  state: {
    episodes: [],
    characters: [],
    locations: [],
  },
  mutations: {
    'SET_EPISODES' (state,episodes){
      state.episodes = episodes;
    },
    'SET_CHARACTERS' (state, characters){
      state.characters = characters;
    },
    'SET_LOCATIONS' (state, locations){
      state.locations = locations;
    }
  },
  actions: {
    initEpisodes: ({commit}) =>{
      axios.get("https://rickandmortyapi.com/api/episode").then(response =>{
          commit("SET_EPISODES", response.data.results);
      });
    },
    initCharacters: ({commit}) =>{
      axios.get("https://rickandmortyapi.com/api/character").then(response =>{
        commit("SET_CHARACTERS", response.data.results);
      });
    },
    initLocations: ({commit}) =>{
      axios.get("https://rickandmortyapi.com/api/location").then(response =>{
        commit("SET_LOCATIONS", response.data.results);
      });
    },
  },
  getters: {
    episodes: state => state.episodes,
    characters: state => state.characters,
    locations: state => state.locations,
  }
})
