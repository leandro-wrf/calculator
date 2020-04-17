import React from 'react';
import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './style';

const B0 = ['AC', 'C', '(±)'];
const B1 = ['1', '2', '3', '÷'];
const B2 = ['4', '5', '6', '×'];
const B3 = ['7', '8', '9', '-'];
const B4 = ['.', '0', '=', '+'];

export default function Buttons({ handleButton }) {
	return (
		<View style={styles.container}>
			<View style={styles.row}>
				{B0.map((button) => (
					<TouchableOpacity
						key={button.toString()}
						style={styles.button}
						onPress={() => handleButton(button)}
					>
						<Text style={styles.text}>{button}</Text>
					</TouchableOpacity>
				))}

				<TouchableOpacity
					style={styles.buttonIcon}
					onPress={() => handleButton('X')}
				>
					<Feather name="delete" size={45} color="#fff" />
				</TouchableOpacity>
			</View>

			<View style={styles.row}>
				{B1.map((button) => (
					<TouchableOpacity
						key={button.toString()}
						style={styles.button}
						onPress={() => handleButton(button)}
					>
						<Text style={styles.text}>{button}</Text>
					</TouchableOpacity>
				))}
			</View>

			<View style={styles.row}>
				{B2.map((button) => (
					<TouchableOpacity
						key={button.toString()}
						style={styles.button}
						onPress={() => handleButton(button)}
					>
						<Text style={styles.text}>{button}</Text>
					</TouchableOpacity>
				))}
			</View>

			<View style={styles.row}>
				{B3.map((button) => (
					<TouchableOpacity
						key={button.toString()}
						style={styles.button}
						onPress={() => handleButton(button)}
					>
						<Text style={styles.text}>{button}</Text>
					</TouchableOpacity>
				))}
			</View>

			<View style={styles.row}>
				{B4.map((button) => (
					<TouchableOpacity
						key={button.toString()}
						style={styles.button}
						onPress={() => handleButton(button)}
					>
						<Text style={styles.text}>{button}</Text>
					</TouchableOpacity>
				))}
			</View>
		</View>
	);
}
