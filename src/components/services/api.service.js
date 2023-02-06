let _url='https://api.spacexdata.com/v3/launches/'
const getAll=()=>{
    return fetch(_url)
}
export {getAll}
