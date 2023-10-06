import React, { useEffect, useState } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { useSelector } from 'react-redux'
import {
  Header,
  InputSearch,
  Dropdown,
  CategoryFilter,
  FavoriteFilter,
  ProductItem,
} from '@/presentation/components'

import { ProductsWrapper } from './styled'
import { RootState } from '@/infra/redux/store'
import { fetchProducts } from '@/infra/redux/features/products/thunks'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { Filter } from '@/data/usecases/filter'
import { setFiltered } from '@/infra/redux/features/products/slice'

export const Home = () => {
  const [isChecked, setIsChecked] = useState(false)

  const { list, filtered } = useSelector(
    ({ productsSlice }: RootState) => productsSlice
  )

  const dispatch = useAppDispatch()
  const filter = new Filter(list)

  useEffect(() => {
    const handleFetchProducts = async () => {
      await dispatch(fetchProducts())
    }
    void handleFetchProducts()
  }, [])

  const handleQueryFilter = (query: string) => {
    const products = filter.byContent(query)
    dispatch(setFiltered(products))
  }

  const handleCategoryFilter = (category?: string) => {
    if (!isChecked) {
      if (category) {
        const products = filter.byCategory(category)
        dispatch(setFiltered(products))
      } else {
        dispatch(setFiltered([]))
      }
    }
  }

  useEffect(() => {
    if (isChecked) {
      const favorites = localStorage.getItem('synvia-store')
      if (favorites) {
        const products = filter.byFavorite(JSON.parse(favorites))
        dispatch(setFiltered(products))
      }
    } else {
      dispatch(setFiltered([]))
    }
  }, [isChecked])

  return (
    <>
      <Header />
      <Grid>
        <Row style={{ marginTop: '32px' }}>
          <Col md={12}>
            <Row between="md">
              <Col md={7}>
                <InputSearch
                  disabled={isChecked}
                  onChange={(e) => {
                    handleQueryFilter(e.target.value)
                  }}
                  placeholder="Pesquisar por nome ou número"
                />
              </Col>
              <Col md={5}>
                <Dropdown
                  onChange={(option) => {}}
                  placeholder="Selecione a ordem"
                  options={[
                    { id: 1, label: 'Cosméticos', value: 'Cosméticos' },
                    { id: 2, label: 'Estética', value: 'Estética' },
                  ]}
                />
              </Col>
            </Row>

            <Row style={{ marginTop: '32px' }}>
              <Col md={2}>
                <Row>
                  <Col md={12} style={{ opacity: isChecked ? '0.5' : '1' }}>
                    <CategoryFilter
                      isDisabled={isChecked}
                      onSelect={handleCategoryFilter}
                      categories={categories}
                      onRemove={handleCategoryFilter}
                    />
                  </Col>
                  <Col md={12} style={{ marginTop: '24px' }}>
                    <FavoriteFilter
                      isChecked={isChecked}
                      onChange={(isChecked) => {
                        setIsChecked(isChecked)
                      }}
                    />
                  </Col>
                </Row>
              </Col>
              <Col md={8}>
                <ProductsWrapper>
                  {(filtered.length ? filtered : undefined || list).map(
                    (product) => (
                      <ProductItem
                        key={product.id}
                        onClick={(product) => {
                          console.log(product)
                        }}
                        product={product}
                      />
                    )
                  )}
                </ProductsWrapper>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </>
  )
}

export const categories = [
  'pencil',
  'lipstick',
  'liquid',
  'powder',
  'lip_gloss',
  'gel',
  'cream',
  'palette',
  'concealer',
  'highlighter',
  'bb_cc',
  'contour',
  'lip_stain',
  'mineral',
]
