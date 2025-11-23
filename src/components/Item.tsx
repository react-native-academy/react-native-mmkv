import { StyleSheet, Text, View } from 'react-native';

type ItemProps = {
	label: string;
};

export function Item({ label }: ItemProps) {
	return (
		<View style={styles.item}>
			<Text style={styles.text}>{label}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	item: {
		backgroundColor: '#fff',
		padding: 12,
		borderRadius: 10,
		marginBottom: 8,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.08,
		shadowRadius: 2,
		elevation: 2,
	},
	text: {
		fontSize: 16,
	},
});
