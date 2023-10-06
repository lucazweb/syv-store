import { Product } from '@/domain/models/product'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchProducts } from './thunks'

export type ProductsState = {
  isLoading: boolean
  list: Product[]
}

const initialState: ProductsState = {
  list: [],
  isLoading: false,
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      return { ...state, isLoading: action.payload }
    },
    setProducts: (state, action: PayloadAction<Product[]>) => {
      return { ...state, list: action.payload }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
      return {
        ...state,
        list: payload,
        isLoading: false,
      }
    })
  },
})

export const { reducer, actions } = productsSlice
export const { setIsLoading, setProducts } = actions
export default reducer
