React components to create a Holy Grail Layout, with styled-components and styled-system

**Example**

```javascript
import React from 'react'
import { Container, Header, Body, Content, Aside, Footer } from 'react-holy-grail-layout'
export default () => (
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

```