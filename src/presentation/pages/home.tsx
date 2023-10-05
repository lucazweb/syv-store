import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Header } from '../components/header'
import { InputSearch } from '../components/input-search'

export const Home = () => {
  return (
    <>
      <Header />
      <Grid>
        <Row style={{ marginTop: '32px' }}>
          <Col md={10}>
            <Row>
              <Col md={10}>
                <InputSearch placeholder="Pesquisar por nome ou número" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </>
  )
}
