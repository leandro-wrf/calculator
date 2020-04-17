import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
	container: {
		height: 200,
		marginTop: Constants.statusBarHeight,
		justifyContent: 'center',
	},

	text: {
		color: '#333',
		fontSize: 70,
		textAlign: 'right',
	},
});
