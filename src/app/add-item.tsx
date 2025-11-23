import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import {
	KeyboardAvoidingView,
	Platform,
	Pressable,
	StyleSheet,
	Text,
	TextInput,
} from 'react-native';

import { useShoppingListContext } from '@/contexts/ShoppingListContext';

export default function AddItemScreen() {
	const { items, addListItem, updateListItemName } = useShoppingListContext();
	const params = useLocalSearchParams<{ id?: string }>();
	const editingId = typeof params.id === 'string' ? params.id : undefined;
	const [name, setName] = useState('');

	useEffect(() => {
		if (!editingId) return;
		const existing = items.find((item) => item.id === editingId);
		if (existing) {
			setName(existing.name);
		}
	}, [editingId, items]);

	const handleSubmit = () => {
		if (editingId) {
			updateListItemName(editingId, name);
		} else {
			addListItem(name);
		}
		setName('');
		router.back();
	};

	const isDisabled = name.trim().length === 0;
	const isEditing = Boolean(editingId);

	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.select({ ios: 'padding', android: undefined })}>
			<Text style={styles.title}>
				{isEditing ? 'Modifier un article' : 'Nouvel article'}
			</Text>
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
				<Text style={styles.buttonText}>
					{isEditing ? 'Mettre à jour' : 'Ajouter'}
				</Text>
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
