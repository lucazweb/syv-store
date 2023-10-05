import React, { useState } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Header } from '../components/header'
import { InputSearch } from '../components/input-search'
import { Dropdown } from '../components/dropdown/dropdown'
import { CategoryFilter } from '../components/category-filter'
import { FavoriteFilter } from '../components/favorite-filter'

export const Home = () => {
  const [isChecked, setIsChecked] = useState(false)

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
                      categories={[
                        'perfume',
                        'batom',
                        'creme',
                        'hidratante',
                        'esmalte',
                        'maquiagem',
                      ]}
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
            </Row>
          </Col>
        </Row>
      </Grid>
    </>
  )
}
