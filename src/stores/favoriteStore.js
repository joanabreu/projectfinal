//Criação da Barra de Favoritos - Adicionando o elemento=foto e removendo dos favoritos
const favoriteStore = {
    data: {
        favoritecounter:[]
    },
    methods: {
        addelement(element){
            favoriteStore.data.favoritecounter.push(element);
        },
        removeelement(index){
            favoriteStore.data.favoritecounter.splice(index,1)
        }
    }
}
export default favoriteStore