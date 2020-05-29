import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);
//Criação da Barra de Favoritos - Adicionando o elemento=foto e removendo dos favoritos
const favoriteStoreX = new Vuex.Store({
    state: {
        favoritecounter:[],
        favoritebreed:[]
    },
    plugins: [createPersistedState()],
    mutations: {
        addelement(state, element){
            state.favoritecounter.push(element);
        },
        removeelement(state, index){
            state.favoritecounter.splice(index,1)
        },
        addbreed(state, breed){
            state.favoritebreed.push(breed);
        },
        removebreed(state, index){
            state.favoritebreed.splice(index,1)
        }
    },  

    });
export default favoriteStoreX