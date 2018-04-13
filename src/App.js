import React from 'react'
import { Container, Header, Body, Content, Aside, Footer } from './components'
export default () => (
  <Container>
    <Header bg="lightgreen" p={2}>
      Header
    </Header>
    <Body>
      <Content bg="lightblue" p={2}>
        Content
      </Content>
      <Aside bg="pink" left p={2}>
        Left
      </Aside>
      <Aside bg="orange" right p={2}>
        Right
      </Aside>
    </Body>
    <Footer bg="yellow" p={2}>
      Footer
    </Footer>
  </Container>
)
