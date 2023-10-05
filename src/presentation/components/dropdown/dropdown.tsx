import React, { useRef, useState } from 'react'
import useOutsideClick from '@/presentation/hooks/useClickOutside'
import {
  DropLabel,
  DropdownButton,
  DropdownWrapper,
  FlexWrapper,
} from './styled'

type Option = { id: string | number; label: string; value: string | number }

export type DropdownProps = {
  options: Option[]
  placeholder?: string
  label?: string
  onChange: (option: Option) => void
}

export const Dropdown = (props: DropdownProps) => {
  const [isActive, setIsActive] = useState(false)
  const [selected, setIsSelected] = useState<Option | undefined>()

  const ref = useRef()

  useOutsideClick(ref, () => {
    setIsActive(false)
  })

  const handleChange = (option: Option) => {
    setIsSelected(option)
    props.onChange(option)
  }

  return (
    <FlexWrapper>
      <DropLabel>{props.label ? props.label : 'Ordenar por'}</DropLabel>
      <DropdownWrapper ref={ref} data-testid="dropdown-component">
        <DropdownButton
          onClick={(e) => {
            setIsActive(!isActive)
          }}
        >
          {selected ? selected.label : props.placeholder || 'Selecione'}
          <span
            className={isActive ? 'fas fa-caret-up' : 'fas fa-caret-down'}
          />
        </DropdownButton>
        <div
          className="dropdown-content"
          style={{ display: isActive ? 'block' : 'none' }}
        >
          {props.options.map((option) => (
            <div
              data-testid="drop-item"
              key={option.id}
              onClick={() => {
                handleChange(option)
                setIsActive(!isActive)
              }}
              className="item"
            >
              {option.label}
            </div>
          ))}
        </div>
      </DropdownWrapper>
    </FlexWrapper>
  )
}
