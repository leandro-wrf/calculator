import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
	},

	row: {
		flex: 1,
		flexDirection: 'row',
	},

	button: {
		flex: 1,
		backgroundColor: '#333',
		justifyContent: 'center',
		borderWidth: 0.3,
		borderColor: '#000',
	},

	buttonIcon: {
		flex: 1,
		backgroundColor: '#333',
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 0.3,
		borderColor: '#000',
	},

	text: {
		color: '#fff',
		fontSize: 40,
		textAlign: 'center',
	},
});
