import React from 'react'
import { HeaderWrapper, Logo, colFlexMiddle } from './styled'
import { Col, Grid, Row } from 'react-flexbox-grid'
import { FaUserCircle } from 'react-icons/fa'

export const Header = () => {
  return (
    <HeaderWrapper data-testid="header-component">
      <Grid>
        <Row between="md">
          <Col md={10}>
            <Logo data-testid="logo" />
          </Col>
          <Col md={2} style={colFlexMiddle}>
            <FaUserCircle data-testid="button-user" size={30} color="#86BD2C" />
          </Col>
        </Row>
      </Grid>
    </HeaderWrapper>
  )
}
