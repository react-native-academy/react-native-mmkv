import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type ItemProps = {
	label: string;
};

export function Item({ label }: ItemProps) {
	const [checked, setChecked] = useState(false);
	const iconName = checked ? 'checkmark-circle' : 'ellipse-outline';
	const iconColor = checked ? '#22c55e' : '#94a3b8';

	return (
		<View style={styles.item}>
			<Text style={[styles.text, checked && styles.textChecked]}>{label}</Text>
			<Pressable
				accessibilityRole="checkbox"
				accessibilityState={{ checked }}
				onPress={() => setChecked((prev) => !prev)}
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
