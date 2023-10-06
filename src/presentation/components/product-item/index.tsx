import React, { useEffect, useState } from 'react'
import {
  FlexWrapper,
  ProductCategory,
  ProductId,
  Image,
  ProductTitle,
  Wrapper,
  favoriteStyles,
} from './styled'
import { Product } from '@/domain/models/product'
import { FaHeart } from 'react-icons/fa'
import { FavoritesStorage } from '@/data/usecases/favorites-storage'

export type ProductItemProps = {
  product: Product
  onClick: (product: Product) => void
}

export const ProductItem = ({ product, onClick }: ProductItemProps) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const favStorage = new FavoritesStorage('synvia-store')

  useEffect(() => {
    if (favStorage.checkFavorite(product.id)) setIsFavorite(true)
  }, [])

  const handleClick = () => {
    onClick(product)
  }

  const handleFavorite = (id: number) => {
    console.log('favorite')

    if (!isFavorite) {
      favStorage.save(id)
    } else {
      favStorage.remove(id)
    }

    setIsFavorite(!isFavorite)
  }

  return (
    <Wrapper data-testid="product-item-component">
      <FaHeart
        className={isFavorite ? 'always-visble' : ''}
        style={favoriteStyles}
        onClick={() => {
          handleFavorite(product.id)
        }}
        color={isFavorite ? '#900' : '#ccc'}
      />
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
