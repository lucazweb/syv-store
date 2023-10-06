import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import {
  Dropdown,
  DropdownProps,
} from '@/presentation/components/dropdown/dropdown'
import { faker } from '@faker-js/faker'

const makeSut = (props: DropdownProps) => {
  return render(<Dropdown {...props} />)
}

describe('Dropdown component tests', () => {
  test('should render component correctly', () => {
    makeSut({ options: [], onChange: jest.fn() })
    expect(screen.getByTestId('dropdown-component')).toBeTruthy()
  })

  test('should render placeholder if is passed as prop', () => {
    const placeholder = faker.random.word()
    makeSut({ options: [], placeholder, onChange: jest.fn() })
    expect(screen.getByText(placeholder)).toBeTruthy()
  })

  test('should render label if is passed as prop', () => {
    const label = faker.random.word()
    makeSut({ options: [], label, onChange: jest.fn() })
    expect(screen.getByText(label)).toBeTruthy()
  })

  test('should render default label if is not passed as prop', () => {
    const defaultLabel = 'Ordenar por'
    makeSut({ options: [], onChange: jest.fn() })
    expect(screen.getByText(defaultLabel)).toBeTruthy()
  })

  test('should render options props correctly', () => {
    const options = [
      {
        id: 1,
        label: 'Cosméticos',
        value: 'Cosméticos',
      },
      {
        id: 2,
        label: 'Medicamentos',
        value: 'Medicamentos',
      },
      {
        id: 3,
        label: 'Uso geral',
        value: 'Uso geral',
      },
    ]
    makeSut({
      options,
      onChange: jest.fn(),
    })

    const list = screen.getAllByTestId('drop-item')
    expect(list).toHaveLength(options.length)
    expect(list[0].textContent).toEqual(options[0].label)
    expect(list[1].textContent).toEqual(options[1].label)
    expect(list[2].textContent).toEqual(options[2].label)
  })
})
