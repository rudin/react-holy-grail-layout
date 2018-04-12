import View from './View'

export default View.extend`
  ${props => (props.right ? `` : `order: -1;`)};
  @media (min-width: ${props =>
      props.theme.breakpoints
        ? props.theme.breakpoints[props.breakpoint || 1]
        : `46em`}) {
    flex: 0 0 ${props => (props.width ? props.width : `12em`)};
  }
  @media (max-width: 700px) {
    ${props => !props.primary && `order: 0;`};
  }
`
