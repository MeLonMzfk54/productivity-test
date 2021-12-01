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
      let allEpisodes = [];
      var n = 0;
      let i = 2;
      axios.get("https://rickandmortyapi.com/api/episode").then(response =>{
        allEpisodes.push(...response.data.results);
        n = response.data.info;
        while(i <= n.pages){
          axios.get(n.next.slice(0,-1) + i).then(response => {
            allEpisodes.push(...response.data.results);
            n = response.data.info;
          });
          i++;
        }
      }).catch(error => console.log(error));
      commit("SET_EPISODES", allEpisodes);
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
