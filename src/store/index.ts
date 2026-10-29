import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './reducers/Carrinho'
import favoritoReducer from './reducers/Favoritos'
import api from '../services/Api'

export const store = configureStore({
  reducer: {
    Carrinho: carrinhoReducer,
    favorito: favoritoReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
