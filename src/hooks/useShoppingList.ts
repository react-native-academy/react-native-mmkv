import { randomUUID } from 'expo-crypto';
import { useState } from 'react';

const sortItems = (list: ShoppingListItem[]) =>
	[...list].sort((a, b) => a.name.localeCompare(b.name, 'fr'));

export function useShoppingList() {
	const [items, setItems] = useState<ShoppingListItem[]>([]);

	const toggleListItem = (id: string) => {
		setItems((prev) =>
			sortItems(
				prev.map((item) =>
					item.id === id ? { ...item, purchased: !item.purchased } : item
				)
			)
		);
	};

	const addListItem = (name: string) => {
		const trimmedName = name.trim();
		if (!trimmedName) return;

		setItems((prev) =>
			sortItems([
				...prev,
				{
					id: randomUUID(),
					name: trimmedName,
					purchased: false,
				},
			])
		);
	};

	const removeListItem = (id: string) => {
		setItems((prev) => prev.filter((item) => item.id !== id));
	};

	const updateListItemName = (id: string, name: string) => {
		const trimmedName = name.trim();
		if (!trimmedName) return;

		setItems((prev) =>
			sortItems(
				prev.map((item) =>
					item.id === id ? { ...item, name: trimmedName } : item
				)
			)
		);
	};

	return {
		items: sortItems(items),
		toggleListItem,
		addListItem,
		removeListItem,
		updateListItemName,
	};
}
