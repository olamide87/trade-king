import axios from "axios"

const TOKEN = "ceduol2ad3i32ebrsikgceduol2ad3i32ebrsil0"

export default axios.create({ 
    baseURL: "https://finnhub.io/api/v1",
    params: {
    token: TOKEN
} })