import axios from 'axios'

const baseURL = "http://localhost:5000/api/v1/phonewords"

export default (number : string) : Promise => {
    const url = `${baseURL}/${number}`
    
    return axios.get(url)
        .then(res => res.data)
        .catch(err => new Error(err))
}