import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type ItemProps = {
	name: string;
	purchased: boolean;
	onToggle: () => void;
	onDelete: () => void;
};

export function Item({ name, purchased, onToggle, onDelete }: ItemProps) {
	const iconName = purchased ? 'checkmark-circle' : 'ellipse-outline';
	const iconColor = purchased ? '#22c55e' : '#94a3b8';

	return (
		<View style={styles.item}>
			<Text style={[styles.text, purchased && styles.textChecked]}>{name}</Text>
			<View style={styles.actions}>
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
				<Pressable
					accessibilityLabel={`Supprimer ${name}`}
					onPress={onDelete}
					style={({ pressed }) => [
						styles.deleteButton,
						pressed && styles.checkboxPressed,
					]}>
					<Ionicons
						name="trash-outline"
						size={22}
						color="#ef4444"
					/>
				</Pressable>
			</View>
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
	actions: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
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
	deleteButton: {
		padding: 6,
		borderRadius: 16,
	},
	checkboxPressed: {
		opacity: 0.8,
	},
});
