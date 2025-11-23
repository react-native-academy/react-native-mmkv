import { Item } from '@/components/Item';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
	const items = ['Premier', 'Deuxième', 'Troisième', 'Quatrième'];

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Ma liste</Text>
			<FlatList
				data={items}
				keyExtractor={(item, index) => `${item}-${index}`}
				contentContainerStyle={styles.listContent}
				renderItem={({ item }) => <Item label={item} />}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f6f6f6',
		padding: 16,
	},
	title: {
		fontSize: 20,
		fontWeight: '700',
		marginBottom: 12,
	},
	listContent: {
		width: '100%',
	},
});
