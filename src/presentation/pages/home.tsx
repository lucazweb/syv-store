import React, { useEffect, useState } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { useSelector, useDispatch } from 'react-redux'
import { Product } from '@/domain/models/product'
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

export const Home = () => {
  const [isChecked, setIsChecked] = useState(false)

  const { list } = useSelector(({ productsSlice }: RootState) => productsSlice)

  const dispatch = useAppDispatch()

  console.log(list)

  useEffect(() => {
    const handleFetchProducts = async () => {
      await dispatch(fetchProducts())
    }
    void handleFetchProducts()
  }, [])

  return (
    <>
      <Header />
      <Grid>
        <Row style={{ marginTop: '32px' }}>
          <Col md={12}>
            <Row between="md">
              <Col md={7}>
                <InputSearch placeholder="Pesquisar por nome ou número" />
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
                  <Col md={12}>
                    <CategoryFilter
                      onSelect={() => undefined}
                      categories={categories}
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
                  {list.map((product) => (
                    <ProductItem
                      key={product.id}
                      onClick={(product) => {
                        console.log(product)
                      }}
                      product={product}
                    />
                  ))}
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
