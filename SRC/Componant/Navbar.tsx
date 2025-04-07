// Navbar.tsx
import type React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../types"; // ajuste le chemin si nécessaire

interface NavbarProps {
	navigation: NativeStackNavigationProp<
		RootStackParamList,
		keyof RootStackParamList
	>;
}

const Navbar: React.FC<NavbarProps> = ({ navigation }) => {
	return (
		<View style={styles.navbar}>
			<TouchableOpacity onPress={() => navigation.navigate("Home")}>
				<Text style={styles.navText}>Accueil</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate("MonFrigo")}>
				<Text style={styles.navText}>Mon Frigo</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate("Connexion")}>
				<Text style={styles.navText1}>Connexion</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	navbar: {
		backgroundColor: "#3F6C7D",
		flexDirection: "row",
		justifyContent: "space-around",
		paddingVertical: 10,
	},
	navText: {
		color: "white",
		fontSize: 16,
		fontFamily: "JetBrainsMono-Regular",
	},
	navText1: {
		color: "white",
		backgroundColor: "red",
		paddingHorizontal: 10,
		paddingVertical: 5,
	},
});

export default Navbar;
