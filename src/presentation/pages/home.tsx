import React, { useEffect, useState } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { useSelector } from 'react-redux'
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

export const Home = () => {
  const [isChecked, setIsChecked] = useState(false)
  const [products, setProducts] = useState<Product[]>([])

  const { isLoading, list } = useSelector(
    ({ productsSlice }: RootState) => productsSlice
  )

  console.log(list)

  // useEffect(() => {
  //   const handleRequest = () => {
  //     try {
  //       void fetch('https://makeup-api.herokuapp.com/api/v1/products.json')
  //         .then(async (res) => {
  //           return await res.json()
  //         })
  //         .then((data) => {
  //           console.log(data)
  //           setProducts(data)
  //         })
  //     } catch (err) {}
  //   }
  //   handleRequest()
  // })

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
