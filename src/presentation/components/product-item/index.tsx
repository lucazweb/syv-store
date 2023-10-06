import React from 'react'
import {
  FlexWrapper,
  ProductCategory,
  ProductId,
  Image,
  ProductTitle,
  Wrapper,
} from './styled'
import { Product } from '@/domain/models/product'

export type ProductItemProps = {
  product: Product
  onClick: (product: Product) => void
}

export const ProductItem = ({ product, onClick }: ProductItemProps) => {
  const handleClick = () => {
    onClick(product)
  }

  return (
    <Wrapper data-testid="product-item-component">
      <Image
        data-testid="product-image"
        onClick={handleClick}
        bgimage={product.api_featured_image}
      />
      <FlexWrapper>
        <ProductId data-testid="product-number"> N° {product.id}</ProductId>
      </FlexWrapper>
      <ProductTitle data-testid="product-name" onClick={handleClick}>
        {product.name}
      </ProductTitle>
      <ProductCategory>{product.category || '---'}</ProductCategory>
    </Wrapper>
  )
}
