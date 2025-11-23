import { Ionicons } from '@expo/vector-icons';
import { Stack, router } from 'expo-router';
import { Pressable } from 'react-native';

import { ShoppingItemsProvider } from '@/contexts/ShoppingItemsContext';

export default function RootLayout() {
	return (
		<ShoppingItemsProvider>
			<Stack>
				<Stack.Screen
					name="index"
					options={{
						headerTitle: 'Liste de courses',
						headerRight: () => (
							<Pressable onPress={() => router.push('/add-item')}>
								<Ionicons
									name="add"
									size={36}
									color="#1e90ff"
								/>
							</Pressable>
						),
					}}
				/>
				<Stack.Screen
					name="add-item"
					options={{
						presentation: 'modal',
						title: 'Ajouter un article',
					}}
				/>
			</Stack>
		</ShoppingItemsProvider>
	);
}
