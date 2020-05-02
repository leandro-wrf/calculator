import React from 'react';
import Constants from 'expo-constants';

import { Container, History, Value, Preview } from '../../styles/display';

export default function Display({ value, history, preview }) {
  return (
    <Container style={{ marginTop: Constants.statusBarHeight }}>
      <History>{history}</History>
      <Value>{value}</Value>
      <Preview>{preview}</Preview>
    </Container>
  );
}
