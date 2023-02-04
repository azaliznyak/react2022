let _url='https://api.spacexdata.com/v4/launches/'
const getAll=()=>{
    return fetch(_url)
}
export {getAll}
