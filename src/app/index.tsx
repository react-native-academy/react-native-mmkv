import { Item } from '@/components/Item';
import { useShoppingListContext } from '@/contexts/ShoppingListContext';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
	const { items, toggleItem, removeItem } = useShoppingListContext();

	return (
		<View style={styles.container}>
			<FlatList
				style={styles.list}
				data={items}
				keyExtractor={(item) => item.id}
				contentContainerStyle={styles.listContent}
				ListEmptyComponent={
					<View style={styles.emptyContainer}>
						<Text style={styles.emptyTitle}>Aucun article</Text>
						<Text style={styles.emptySubtitle}>
							Appuie sur le bouton + pour en ajouter un.
						</Text>
					</View>
				}
				renderItem={({ item }) => (
					<Item
						name={item.name}
						purchased={item.purchased}
						onToggle={() => toggleItem(item.id)}
						onDelete={() => removeItem(item.id)}
					/>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#f6f6f6',
		padding: 16,
	},
	list: {
		flex: 1,
	},
	listContent: {
		flexGrow: 1,
		gap: 10,
	},
	emptyContainer: {
		paddingVertical: 48,
		alignItems: 'center',
		gap: 8,
	},
	emptyTitle: {
		fontSize: 18,
		fontWeight: '700',
		color: '#0f172a',
	},
	emptySubtitle: {
		fontSize: 14,
		color: '#475569',
	},
});
