import React, { Component } from 'react'

import { Container, Header, Body, Content, Aside, Footer } from './components'

class App extends Component {
  render() {
    return (
      <Container>
        <Header bg="lightgreen" p={2}>
          Header
        </Header>
        <Body>
          <Content bg="lightblue" p={2}>
            Content
          </Content>
          <Aside bg="pink" left primary p={2}>
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
  }
}

export default App
