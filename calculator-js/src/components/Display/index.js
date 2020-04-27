import React from 'react'

import { Container, History, Value } from '../../styles/display'

export default function Display({ value, history }) {
  return (
    <Container>
      <History>{history}</History>
      <Value>{value}</Value>
    </Container>
  )
}
