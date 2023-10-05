import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Header } from './header'

describe('Header tests', () => {
  test('should render component correctly', () => {
    render(<Header />)
    expect(screen.getByTestId('button-user')).toBeTruthy()
    expect(screen.getByTestId('header-component')).toBeTruthy()
  })
})
