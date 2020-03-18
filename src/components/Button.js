import styled from 'styled-components'
import {
  borderRadius,
  color,
  compose,
  flexbox,
  layout,
  position,
  size,
  space
} from 'styled-system'

const Button = styled.button(
  compose(
    borderRadius,
    color,
    flexbox,
    layout,
    position,
    size,
    space
  )
)

Button.defaultProps = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center'
}

export default Button