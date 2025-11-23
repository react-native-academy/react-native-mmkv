import { randomUUID } from 'expo-crypto';
import { useState } from 'react';

const sortItems = (list: ShoppingItem[]) =>
	[...list].sort((a, b) => a.name.localeCompare(b.name, 'fr'));

export function useShoppingItemsLogic() {
	const [items, setItems] = useState<ShoppingItem[]>([]);

	const toggleItem = (id: string) => {
		setItems((prev) =>
			sortItems(
				prev.map((item) =>
					item.id === id ? { ...item, purchased: !item.purchased } : item
				)
			)
		);
	};

	const addItem = (name: string) => {
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

	const removeItem = (id: string) => {
		setItems((prev) => prev.filter((item) => item.id !== id));
	};

	return {
		items: sortItems(items),
		toggleItem,
		addItem,
		removeItem,
	};
}
