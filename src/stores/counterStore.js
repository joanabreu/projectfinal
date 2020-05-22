//Criação de uma Store para que possamos contabilizar elementos e incrementado de modo a que fique guardado os favoritos seleccionados
const counterStore = {
    data: {
        counter:0
    },
    methods: {
        increment(){
            counterStore.data.counter+=1
        }
    }
}
export default counterStore