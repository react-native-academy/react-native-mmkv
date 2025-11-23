import { router } from 'expo-router';
import { useState } from 'react';
import {
	KeyboardAvoidingView,
	Platform,
	Pressable,
	StyleSheet,
	Text,
	TextInput,
} from 'react-native';

import { useShoppingItems } from '@/contexts/ShoppingItemsContext';

export default function AddItemScreen() {
	const { addItem } = useShoppingItems();
	const [name, setName] = useState('');

	const handleSubmit = () => {
		addItem(name);
		setName('');
		router.back();
	};

	const isDisabled = name.trim().length === 0;

	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.select({ ios: 'padding', android: undefined })}>
			<Text style={styles.title}>Nouvel article</Text>
			<TextInput
				value={name}
				onChangeText={setName}
				placeholder="Ex: Pommes, Lait, etc."
				style={styles.input}
				autoFocus
				returnKeyType="done"
				onSubmitEditing={handleSubmit}
			/>
			<Pressable
				onPress={handleSubmit}
				disabled={isDisabled}
				style={({ pressed }) => [
					styles.button,
					isDisabled && styles.buttonDisabled,
					pressed && !isDisabled && styles.buttonPressed,
				]}>
				<Text style={styles.buttonText}>Ajouter</Text>
			</Pressable>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
		backgroundColor: '#f8fafc',
		gap: 16,
		justifyContent: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: '700',
		color: '#0f172a',
		textAlign: 'center',
	},
	input: {
		borderWidth: 1,
		borderColor: '#e2e8f0',
		borderRadius: 10,
		paddingHorizontal: 12,
		paddingVertical: 10,
		fontSize: 16,
		backgroundColor: '#fff',
	},
	button: {
		backgroundColor: '#1e90ff',
		paddingVertical: 12,
		borderRadius: 10,
		alignItems: 'center',
	},
	buttonPressed: {
		opacity: 0.85,
	},
	buttonDisabled: {
		backgroundColor: '#94a3b8',
	},
	buttonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: '700',
	},
});
