import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import axios from 'axios';
export default new Vuex.Store({
  state: {
    episodes: [],
    characters: [],
    locations: [],
    locationNext: '',
    characterNext: '',
  },
  mutations: {
    'SET_EPISODES' (state,episodes){
      state.episodes = episodes;
    },
    'SET_CHARACTERS' (state, characters){
      state.characters.push(...characters.results);
      state.characterNext = characters.info.next;
    },
    'SET_LOCATIONS' (state, locations){
      state.locations.push(...locations.results);
      state.locationNext = locations.info.next;
    }
  },
  actions: {
    initEpisodes: ({commit}) =>{
      let allEpisodes = [];
      let n = 0;
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

    initCharacters: ({commit}, link = "https://rickandmortyapi.com/api/character") =>{
      axios.get(link).then(response =>{
        commit("SET_CHARACTERS", response.data);
      });
    },

    initLocations: ({commit}, link = "https://rickandmortyapi.com/api/location") =>{
      axios.get(link).then(response =>{
        commit("SET_LOCATIONS", response.data);
      });
    },
  },
  getters: {
    episodes: state => state.episodes,
    characters: state => state.characters,
    locations: state => state.locations,

    locationNext: state => state.locationNext,
    characterNext: state => state.characterNext,
  }
})
