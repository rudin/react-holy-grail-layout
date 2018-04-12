import View from './View'

export default View.extend`
  @media (min-width: ${props =>
      props.theme.breakpoints
        ? props.theme.breakpoints[props.breakpoint || 1]
        : `46em`}) {
    flex: 1;
  }
`
