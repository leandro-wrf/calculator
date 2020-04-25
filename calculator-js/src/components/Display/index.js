import React from 'react';
import { View, Text } from 'react-native';

import styles from './style';

export default function Display({ value,history }) {
	return (
		<View style={styles.container}>
			<Text style={styles.history}>{history}</Text>
			<Text style={styles.text}>{value}</Text>
		</View>
	);
}
