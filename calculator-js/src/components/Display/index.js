import React from 'react';
import { View, Text } from 'react-native';

import styles from './style';

export default function Display({ value }) {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{value}</Text>
		</View>
	);
}
