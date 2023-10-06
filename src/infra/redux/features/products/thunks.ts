import { Product } from '@/domain/models/product'
import { api } from '@/infra/http-client/axios-http-client'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk<Product[]>(
  'products/fetchProducts',
  async () => {
    const { data } = await api.get('/')

    console.log(data)
    return data
  }
)
