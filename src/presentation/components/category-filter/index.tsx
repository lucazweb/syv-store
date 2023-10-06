import React, { useState } from 'react'
import {
  CategoryButton,
  CategoryFWrapper,
  CategoryTitle,
  Filters,
} from './styled'

export type CategoryFilterProps = {
  categories: string[]
  onSelect: (category: string) => void
  onRemove: () => void
  isDisabled?: boolean
}

export const CategoryFilter = ({
  categories,
  onSelect,
  onRemove,
  isDisabled,
}: CategoryFilterProps) => {
  const [selected, setSelected] = useState<string | undefined>()

  const handleSelection = (category: string) => {
    if (!isDisabled) {
      if (selected === category) {
        setSelected(undefined)
        onRemove()
        return
      }
      setSelected(category)
      onSelect(category)
    }
  }

  return (
    <CategoryFWrapper data-testid="category-filter">
      <CategoryTitle>Filtrar por categoria</CategoryTitle>
      <Filters>
        {categories.map((c: string) => (
          <CategoryButton
            data-testid="category"
            className={selected === c ? 'active' : ''}
            onClick={() => {
              handleSelection(c)
            }}
            key={c}
          >
            {c}
          </CategoryButton>
        ))}
      </Filters>
    </CategoryFWrapper>
  )
}
