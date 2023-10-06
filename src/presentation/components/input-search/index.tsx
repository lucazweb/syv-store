import React, { InputHTMLAttributes, useState } from 'react'
import { StyledInput } from './styled'

export interface InputSearchProps
  extends InputHTMLAttributes<HTMLInputElement> {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputSearch = (props: InputSearchProps) => {
  const [value, setValue] = useState('')

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /[^\w\s]/gi
    if (regex.test(e.target.value)) {
      const val = e.target.value.replace(/[^\w\s]/gi, '')
      setValue(val)
      if (props.onChange) {
        props.onChange({
          ...e,
          target: {
            ...e.target,
            value: e.target.value.replace(/[^\w\s]/gi, ''),
          },
        })
      }
    } else {
      setValue(e.target.value)
      if (props.onChange) props.onChange(e)
    }
  }

  return (
    <StyledInput
      data-testid="input-search-component"
      {...props}
      value={value}
      onChange={(e) => {
        handleOnChange(e)
      }}
    />
  )
}
