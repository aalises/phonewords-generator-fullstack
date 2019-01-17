import axios from 'axios'

const baseURL = "https://pokeapi.co/api/v2/"

export default (number : string) : Promise => {
    const url = `${baseURL}/${number}/`
    
    return axios.get(url)
        .then(res => res.data)
        .catch(err => new Error(err))
}