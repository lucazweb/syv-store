import { Product } from '@/domain/models/product'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type ProductsState = {
  isLoading: boolean
  list: Product[]
}

const initialState: ProductsState = {
  list: [
    {
      id: 1048,
      brand: 'colourpop',
      name: 'Lippie Pencil',
      price: '5.0',
      price_sign: '$',
      currency: 'CAD',
      image_link:
        'https://cdn.shopify.com/s/files/1/1338/0845/collections/lippie-pencil_grande.jpg?v=1512588769',
      product_link: 'https://colourpop.com/collections/lippie-pencil',
      website_link: 'https://colourpop.com',
      description:
        'Lippie Pencil A long-wearing and high-intensity lip pencil that glides on easily and prevents feathering. Many of our Lippie Stix have a coordinating Lippie Pencil designed to compliment it perfectly, but feel free to mix and match!',
      rating: null,
      category: 'pencil',
      product_type: 'lip_liner',
      tag_list: ['cruelty free', 'Vegan'],
      created_at: '2018-07-08T23:45:08.056Z',
      updated_at: '2018-07-09T00:53:23.301Z',
      product_api_url:
        'https://makeup-api.herokuapp.com/api/v1/products/1048.json',
      api_featured_image:
        '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/048/original/open-uri20180708-4-13okqci?1531093614',
      product_colors: [
        {
          hex_value: '#B28378',
          colour_name: 'BFF Pencil',
        },
        {
          hex_value: '#A36B5E',
          colour_name: '951 Pencil',
        },
        {
          hex_value: '#966A60',
          colour_name: 'Beeper Pencil',
        },
        {
          hex_value: '#8F5954',
          colour_name: 'Oh Snap Pencil',
        },
        {
          hex_value: '#975348',
          colour_name: 'Curvii Pencil',
        },
        {
          hex_value: '#865B69',
          colour_name: 'Lumiere Pencil',
        },
        {
          hex_value: '#8E474D',
          colour_name: 'Bumble Pencil',
        },
        {
          hex_value: '#5F2820',
          colour_name: 'BFF Pencil 3',
        },
        {
          hex_value: '#C095BC',
          colour_name: 'Brills Pencil',
        },
        {
          hex_value: '#743A6A',
          colour_name: 'Are N Be Pencil',
        },
        {
          hex_value: '#965564',
          colour_name: 'Contempo Pencil',
        },
        {
          hex_value: '#BF2C7E',
          colour_name: 'Heart On Pencil',
        },
        {
          hex_value: '#CE435D',
          colour_name: 'Trixie Pencil',
        },
        {
          hex_value: '#DA6952',
          colour_name: 'Chi Chi Pencil',
        },
        {
          hex_value: '#A33C37',
          colour_name: 'Clique Pencil',
        },
        {
          hex_value: '#C23D3C',
          colour_name: 'Frenchie Pencil',
        },
        {
          hex_value: '#AF4051',
          colour_name: 'Bossy Pencil',
        },
        {
          hex_value: '#914B4C',
          colour_name: 'Wild Nothing Pencil',
        },
        {
          hex_value: '#6D414B',
          colour_name: 'Dopey Pencil',
        },
        {
          hex_value: '#4D2D28',
          colour_name: 'Toolips Pencil',
        },
        {
          hex_value: '#361927',
          colour_name: 'Mamacita Pencil',
        },
        {
          hex_value: '#714B41',
          colour_name: 'Pitch Pencil',
        },
        {
          hex_value: '#762F50',
          colour_name: 'LBB Pencil',
        },
        {
          hex_value: '#8C4A47',
          colour_name: 'Love Bug Pencil',
        },
        {
          hex_value: '#702E2D',
          colour_name: 'Poison Pencil',
        },
        {
          hex_value: '#93283C',
          colour_name: 'Bichette Pencil',
        },
        {
          hex_value: '#653E44',
          colour_name: 'Dukes Pencil',
        },
        {
          hex_value: '#5C3357',
          colour_name: 'Leather Pencil',
        },
        {
          hex_value: '#242225',
          colour_name: 'Bull Chic Pencil',
        },
        {
          hex_value: '#B5716A',
          colour_name: 'Brink Pencil',
        },
        {
          hex_value: '#B0516F',
          colour_name: 'I Heart This Pencil',
        },
        {
          hex_value: '#542328',
          colour_name: 'Ellarie Pencil',
        },
        {
          hex_value: '#DFAC9B',
          colour_name: 'Toy Pencil',
        },
        {
          hex_value: '#AB7164',
          colour_name: 'BFF Pencil 2',
        },
      ],
    },
  ],
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
})

export const { reducer, actions } = productsSlice
export const { setIsLoading, setProducts } = actions
export default reducer