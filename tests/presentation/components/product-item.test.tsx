import React from 'react'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import {
  ProductItem,
  ProductItemProps,
} from '@/presentation/components/product-item'
import { Product } from '@/domain/models/product'
import { makeProduct } from '@/tests/utils'

const product = makeProduct()

const makeSut = (props: ProductItemProps) => {
  render(<ProductItem {...props} />)
}

const testOnClickHandler = (
  mockOnClick: jest.Mock<Product, [product: Product], any>
) => {
  expect(mockOnClick).toHaveBeenCalled()
  expect(mockOnClick).toHaveBeenCalledTimes(1)
  expect(mockOnClick).toHaveBeenCalledWith(product)
}

describe('ProductItem tests', () => {
  test('should render component correctly', () => {
    makeSut({ product, onClick: jest.fn() })
    expect(screen.getByTestId('product-item-component')).toBeTruthy()
    expect(screen.getByText(`N° ${product.id}`)).toBeTruthy()
    expect(screen.getByText(product.name)).toBeTruthy()
    expect(screen.getByText(product.category)).toBeTruthy()
  })

  test('should call onClick handler on click product image', () => {
    const onClickImplementation = (product: Product) => product
    const mockOnClick = jest.fn(onClickImplementation)

    makeSut({ product, onClick: mockOnClick })
    fireEvent.click(screen.getByTestId('product-image'))
    testOnClickHandler(mockOnClick)
  })

  test('should call onClick handler on click product name', () => {
    const onClickImplementation = (product: Product) => product
    const mockOnClick = jest.fn(onClickImplementation)

    makeSut({ product, onClick: mockOnClick })
    fireEvent.click(screen.getByTestId('product-name'))
    testOnClickHandler(mockOnClick)
  })
})
