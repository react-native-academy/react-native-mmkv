import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type ShoppingItemRowProps = {
	name: string;
	purchased: boolean;
	onToggle: () => void;
	onDelete: () => void;
	onEdit: () => void;
};

export function ShoppingItemRow({
	name,
	purchased,
	onToggle,
	onDelete,
	onEdit,
}: ShoppingItemRowProps) {
	const iconName = purchased ? 'checkmark-circle' : 'ellipse-outline';
	const iconColor = purchased ? '#22c55e' : '#94a3b8';

	return (
		<View style={styles.item}>
			<View style={styles.left}>
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
					onPress={onToggle}
					style={({ pressed }) => [
						styles.textButton,
						pressed && styles.checkboxPressed,
					]}>
					<Text style={[styles.text, purchased && styles.textChecked]}>
						{name}
					</Text>
				</Pressable>
			</View>
			<View style={styles.actions}>
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
				<Pressable
					accessibilityLabel={`Modifier ${name}`}
					onPress={onEdit}
					style={({ pressed }) => [
						styles.editButton,
						pressed && styles.checkboxPressed,
					]}>
					<Ionicons
						name="pencil-outline"
						size={22}
						color="#0ea5e9"
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
		gap: 8,
	},
	left: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},
	actions: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 6,
	},
	text: {
		fontSize: 14,
		fontWeight: '600',
		color: '#0f172a',
		flexShrink: 1,
		maxWidth: '85%',
	},
	textChecked: {
		color: '#94a3b8',
		textDecorationLine: 'line-through',
	},
	checkbox: {
		padding: 6,
		borderRadius: 16,
	},
	textButton: {
		paddingVertical: 4,
		paddingHorizontal: 2,
		borderRadius: 8,
	},
	deleteButton: {
		padding: 6,
		borderRadius: 16,
	},
	editButton: {
		padding: 6,
		borderRadius: 16,
	},
	checkboxPressed: {
		opacity: 0.8,
	},
});
