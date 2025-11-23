import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { Pressable } from 'react-native';

export default function RootLayout() {
	return (
		<Stack>
			<Stack.Screen
				name="index"
				options={{
					headerTitle: 'Liste de courses',
					headerRight: () => (
						<Pressable onPress={() => {}}>
							<Ionicons
								name="add"
								size={36}
								color="#1e90ff"
							/>
						</Pressable>
					),
				}}
			/>
		</Stack>
	);
}
