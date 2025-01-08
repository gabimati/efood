import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart'
import api from '../service/api'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    [api.reducerPath]: api.reducer // Adiciona o reducer gerado pelo RTK Query
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware) // Adiciona o middleware do RTK Query
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
