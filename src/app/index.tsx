import { Item } from '@/components/Item';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
	const items = [
		'Brioche',
		'Nuttela',
		'Croissant',
		'Pain au chocolat',
		'Café',
		"Jus d'orange",
	];
	const sortedItems = [...items].sort((a, b) => a.localeCompare(b, 'fr'));

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Ma liste</Text>
			<FlatList
				data={sortedItems}
				keyExtractor={(item, index) => `${item}-${index}`}
				contentContainerStyle={styles.listContent}
				renderItem={({ item }) => <Item label={item} />}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		justifyContent: 'center',
		backgroundColor: '#f6f6f6',
		padding: 16,
	},
	title: {
		fontSize: 20,
		fontWeight: '700',
		marginBottom: 12,
	},
	listContent: {
		gap: 10,
	},
});
