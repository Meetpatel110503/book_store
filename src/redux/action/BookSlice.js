import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getBook, getBooks } from "../../api"

const initialState = {
  books: [],
  book: null,
  loading: false,
  error: null,
}

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const response = await getBooks()
  return response.data
})

export const fetchBookDetails = createAsyncThunk(
  "books/fetchBookDetails",
  async (id) => {
    const response = await getBook(id)
    return response.data
  }
)

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false
        state.books = action.payload
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
      .addCase(fetchBookDetails.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchBookDetails.fulfilled, (state, action) => {
        state.loading = false
        state.book = action.payload
      })
      .addCase(fetchBookDetails.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export default booksSlice.reducer
