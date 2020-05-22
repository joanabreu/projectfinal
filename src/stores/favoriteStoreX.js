import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

//Criação da Barra de Favoritos - Adicionando o elemento=foto e removendo dos favoritos
const favoriteStoreX = new Vuex.Store({
    state: {
        favoritecounter:['https://images.dog.ceo/breeds/bouvier/n02106382_1005.jpg']
    },
    plugins: [createPersistedState()],
    mutations: {
        addelement(state, element){
            state.favoritecounter.push(element);
        },
        removeelement(state, index){
            state.favoritecounter.splice(index,1);
        }
    }
    /*data: {
        favoritecounter:[]
    },
    methods: {
        addelement(element){
            favoriteStore.data.favoritecounter.push(element);
        },
        removeelement(index){
            favoriteStore.data.favoritecounter.splice(index,1)
        }
    }*/
});
export default favoriteStoreX