import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://api.duckduckgo.com/?q=DuckDuckGo&format=json&pretty=1',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getAnswers() {
        return apiClient.get('/answers')
    }
}