import styled from 'styled-components'
import {
  color,
  compose,
  size,
  space,
  typography
} from 'styled-system'

const Text = styled.span(
  compose(
    color,
    size,
    space,
    typography
  )
)

export default Text