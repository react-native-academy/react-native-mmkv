import { Ionicons } from '@expo/vector-icons';
import { Stack, router } from 'expo-router';
import { Pressable } from 'react-native';

import { ShoppingListProvider } from '@/contexts/ShoppingListContext';

export default function RootLayout() {
	return (
		<ShoppingListProvider>
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
						headerTitle: 'Ajouter un article',
					}}
				/>
			</Stack>
		</ShoppingListProvider>
	);
}
