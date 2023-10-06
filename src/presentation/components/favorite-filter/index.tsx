import React from 'react'
import {
  FavoriteFilterWrapper,
  FilterTitle,
  InputToggle,
  SwitchLabel,
} from './styled'

export type FavoriteFilterProps = {
  onChange: (isChecked: boolean) => void
  isChecked: boolean
}

export const FavoriteFilter = ({
  onChange,
  isChecked,
}: FavoriteFilterProps) => {
  return (
    <FavoriteFilterWrapper data-testid="favorite-filter-component">
      <FilterTitle data-testid="filter-title">Filtrar por favorito</FilterTitle>
      <InputToggle
        checked={isChecked}
        onChange={() => {
          onChange(!isChecked)
        }}
        className="react-switch-checkbox"
        id="react-switch-new"
        type="checkbox"
      />
      <SwitchLabel
        data-testid="switch-label"
        className={
          !isChecked ? 'react-switch-label' : 'react-switch-label ischecked'
        }
        htmlFor="react-switch-new"
      >
        <span className="react-switch-button" />
      </SwitchLabel>
    </FavoriteFilterWrapper>
  )
}
