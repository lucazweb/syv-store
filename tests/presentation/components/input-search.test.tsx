import React from 'react'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { InputSearch } from '@/presentation/components/input-search'
import { faker } from '@faker-js/faker'

const makeSut = (props = {}) => {
  const utils = render(<InputSearch {...props} />)
  const input = screen.getByTestId<HTMLInputElement>('input-search-component')
  return { input, ...utils }
}

describe('InputSearch tests', () => {
  test('should have props if set it ', () => {
    const placeholder = 'Pesquisar por nome'
    const props = { placeholder, type: 'text' }
    const { input } = makeSut(props)
    expect(input).toBeTruthy()
    expect(input).toHaveAttribute('placeholder', placeholder)
    expect(input).toHaveAttribute('type', 'text')
  })

  test('should display updated value when onChange envent', () => {
    const { input } = makeSut()
    const product = faker.commerce.product()

    fireEvent.change(input, { target: { value: product } })
    expect(input.value).toBe(product)
  })

  test('should block invalid characters', () => {
    const { input } = makeSut()
    const query = '@$##@$'

    fireEvent.change(input, { target: { value: query } })
    expect(input.value).not.toBe(query)
  })
})
