import styled from 'styled-components'
import {
  compose,
  layout,
  color,
  size,
  space,
  border,
  flexbox,
  borderRadius
} from 'styled-system'

const Box = styled.div(
  compose(
    layout,
    color,
    size,
    space,
    border,
    flexbox,
    borderRadius
  )
)

export default Box