import React from 'react'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import {
  CategoryFilter,
  CategoryFilterProps,
} from '@/presentation/components/category-filter'

const makeSut = (props: CategoryFilterProps) => {
  return render(<CategoryFilter {...props} />)
}
describe('CategoryFilter component tests', () => {
  test('should render component correctly', () => {
    const categories = [
      'perfume',
      'batom',
      'creme',
      'hidratante',
      'esmalte',
      'maquiagem',
    ]
    makeSut({
      onSelect: jest.fn(),
      onRemove: jest.fn(),
      categories,
    })

    expect(screen.getByTestId('category-filter')).toBeTruthy()
    expect(screen.getAllByTestId('category')).toHaveLength(categories.length)
  })

  test('should call onSelect when item clicked', () => {
    const categories = [
      'perfume',
      'batom',
      'creme',
      'hidratante',
      'esmalte',
      'maquiagem',
    ]
    const onSelectImplementation = (category) => category
    const mockOnSelect = jest.fn(onSelectImplementation)

    makeSut({
      onSelect: mockOnSelect,
      onRemove: jest.fn(),
      categories,
    })

    expect(screen.getByTestId('category-filter')).toBeTruthy()
    fireEvent.click(screen.getByText(categories[0]))

    expect(mockOnSelect).toHaveBeenCalled()
    expect(mockOnSelect).toHaveBeenCalledTimes(1)
    expect(mockOnSelect).toHaveBeenCalledWith(categories[0])
  })
  test('should have class active if is selected', () => {
    const categories = ['perfume', 'batom']
    const onSelectImplementation = (category) => category
    const mockOnSelect = jest.fn(onSelectImplementation)

    makeSut({
      onSelect: mockOnSelect,
      onRemove: jest.fn(),
      categories,
    })

    expect(screen.getByTestId('category-filter')).toBeTruthy()
    const catButton = screen.getByText(categories[0])
    fireEvent.click(catButton)

    const classArr = catButton.getAttribute('class').split(' ')
    expect(classArr.includes('active')).toBeTruthy()
  })
})
