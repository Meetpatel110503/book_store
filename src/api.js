import axios from "axios"

const API_URL = "https://freetestapi.com/api/v1/books"

export const getBooks = async () => {
  return axios.get(`${API_URL}`)
}

export const getBook = async (id) => {
  return axios.get(`${API_URL}/${id}`)
}
