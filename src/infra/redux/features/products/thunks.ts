import { Product } from '@/domain/models/product'
import { api } from '@/infra/http-client/axios-http-client'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { setIsLoading } from './slice'

export const fetchProducts = createAsyncThunk<Product[], null>(
  'products/fetchProducts',
  async (_, { dispatch }) => {
    dispatch(setIsLoading(true))
    const { data } = await api.get('/')

    console.log(data)
    return data
  }
)
