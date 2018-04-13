import View from './View'

const breakpoint = props =>
  props.theme.breakpoints
    ? props.theme.breakpoints[props.breakpoint || 1]
    : `46em`

export default View.extend`
  ${props => (props.right ? `` : `order: -1;`)};
  @media (min-width: ${breakpoint}) {
    flex: 0 0 ${props => (props.width ? props.width : `12em`)};
  }
  @media (max-width: ${breakpoint}) {
    ${props => !props.primary && `order: 0;`};
    ${props => props.primary && !props.left && `order: -1;`};
  }
`
