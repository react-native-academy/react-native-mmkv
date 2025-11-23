import { createContext, useContext, type ReactNode } from 'react';

import { useShoppingList } from '@/hooks/useShoppingList';

type ShoppingListContextValue = ReturnType<typeof useShoppingList>;

const ShoppingListContext = createContext<ShoppingListContextValue | null>(null);

type ShoppingListProviderProps = {
	children: ReactNode | ((value: ShoppingListContextValue) => ReactNode);
};

export function ShoppingListProvider({ children }: ShoppingListProviderProps) {
	const value = useShoppingList();
	const content = typeof children === 'function' ? children(value) : children;

	return (
		<ShoppingListContext.Provider value={value}>
			{content}
		</ShoppingListContext.Provider>
	);
}

export function useShoppingListContext() {
	const context = useContext(ShoppingListContext);
	if (!context) {
		throw new Error(
			'useShoppingListContext must be used within ShoppingListProvider'
		);
	}
	return context;
}
