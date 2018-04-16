React components to create a Holy Grail Layout, with [styled-components](https://www.styled-components.com/) and [styled-system](http://jxnblk.com/styled-system/)

## Installation

```
yarn add react-holy-grail-layout
```

**Example**

```javascript
import React from 'react'
import {
  Container,
  Header,
  Body,
  Content,
  Aside,
  Footer
} from 'react-holy-grail-layout'
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

You can use the styled-components theme provider to configure breakpoints and space.

```javascript
import React from 'react'
import { ThemeProvider } from 'styled-components'
import {
  Container,
  Header,
  Body,
  Content,
  Aside,
  Footer
} from 'react-holy-grail-layout'
export default () => (
  <ThemeProvider
    theme={{
      breakpoints: ['50em', '70em', '90em'],
      space: [0, 14, 28, 64, 132]
    }}
  >
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
  </ThemeProvider>
)
```

Use this pattern if you want to extend the styling of the Layout components:

```javascript
import * as Layout from 'react-holy-grail-layout'

const Container = Layout.Container.extend`
  max-width: 1280px;
`

const Header = Layout.Header.extend`
  border-radius: 24px;
`
```

I love this pattern:

```javascript
const Header = Layout.Header.extend.attrs({ p: 2, bg: 'lightgreen' })``
```

Cheers!
