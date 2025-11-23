import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type ItemProps = {
	name: string;
	purchased: boolean;
	onToggle: () => void;
};

export function Item({ name, purchased, onToggle }: ItemProps) {
	const iconName = purchased ? 'checkmark-circle' : 'ellipse-outline';
	const iconColor = purchased ? '#22c55e' : '#94a3b8';

	return (
		<View style={styles.item}>
			<Text style={[styles.text, purchased && styles.textChecked]}>{name}</Text>
			<Pressable
				accessibilityRole="checkbox"
				accessibilityState={{ checked: purchased }}
				onPress={onToggle}
				style={({ pressed }) => [
					styles.checkbox,
					pressed && styles.checkboxPressed,
				]}>
				<Ionicons
					name={iconName}
					size={26}
					color={iconColor}
				/>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	item: {
		width: '100%',
		backgroundColor: '#ffffff',
		paddingVertical: 14,
		paddingHorizontal: 16,
		borderRadius: 12,
		borderWidth: 1,
		borderColor: '#e2e8f0',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	text: {
		fontSize: 17,
		fontWeight: '600',
		color: '#0f172a',
	},
	textChecked: {
		color: '#94a3b8',
		textDecorationLine: 'line-through',
	},
	checkbox: {
		padding: 4,
		borderRadius: 16,
	},
	checkboxPressed: {
		opacity: 0.8,
	},
});
