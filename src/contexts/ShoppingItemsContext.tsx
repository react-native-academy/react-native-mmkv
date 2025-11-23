import { createContext, useContext, type ReactNode } from 'react';

import { useShoppingItemsLogic } from '@/hooks/useShoppingItems';

type ShoppingItemsContextValue = ReturnType<typeof useShoppingItemsLogic>;

const ShoppingItemsContext = createContext<ShoppingItemsContextValue | null>(null);

type ShoppingItemsProviderProps = {
	children: ReactNode | ((value: ShoppingItemsContextValue) => ReactNode);
};

export function ShoppingItemsProvider({ children }: ShoppingItemsProviderProps) {
	const value = useShoppingItemsLogic();

	const content = typeof children === 'function' ? children(value) : children;

	return (
		<ShoppingItemsContext.Provider value={value}>
			{content}
		</ShoppingItemsContext.Provider>
	);
}

export function useShoppingItems() {
	const context = useContext(ShoppingItemsContext);
	if (!context) {
		throw new Error('useShoppingItems must be used within ShoppingItemsProvider');
	}
	return context;
}
