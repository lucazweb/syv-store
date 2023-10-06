import React, { ReactElement } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render, RenderOptions } from '@testing-library/react'

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <BrowserRouter>{children}</BrowserRouter>
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export const makeProduct = () => {
  return {
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
    ],
  }
}

export { customRender as render }
