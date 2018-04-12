import View from './View'

export default View.extend`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  @media (min-width: ${props =>
    props.theme.breakpoints
      ? props.theme.breakpoints[props.breakpoint || 1]
      : `46em`}) {
    flex-direction: row;
  }
}
`
