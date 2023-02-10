function ApiService(endpoint) {
    this.geAllData=()=> fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
        .then(value => value.json())

    this.getSingleData=(id)=>fetch(`https://jsonplaceholder.typicode.com/${endpoint}/${id}`)
        .then(value => value.json())

}
export {ApiService}