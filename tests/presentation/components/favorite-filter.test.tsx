import React from 'react'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import {
  FavoriteFilter,
  FavoriteFilterProps,
} from '@/presentation/components/favorite-filter'

describe('FavoriteFilter component tests', () => {
  test('should render component correctly', () => {
    render(<FavoriteFilter isChecked={false} onChange={jest.fn()} />)
    expect(screen.getByTestId('favorite-filter-component')).toBeTruthy()
    expect(screen.getByText('Filtrar por favorito')).toBeTruthy()
  })

  test('should have class ischecked when active', () => {
    render(<FavoriteFilter isChecked={true} onChange={jest.fn()} />)

    const switchLabel = screen.getByTestId('switch-label')
    const classArr = switchLabel.getAttribute('class').split(' ')
    console.log(classArr)

    expect(switchLabel).toBeTruthy()
    expect(classArr.includes('ischecked')).toBeTruthy()
  })

  test('should not have class ischecked when disabled', () => {
    render(<FavoriteFilter isChecked={false} onChange={jest.fn()} />)

    const switchLabel = screen.getByTestId('switch-label')
    const classArr = switchLabel.getAttribute('class').split(' ')

    expect(switchLabel).toBeTruthy()
    expect(classArr.includes('ischecked')).toBeFalsy()
  })
})
