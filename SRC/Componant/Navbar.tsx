// biome-ignore lint/style/useImportType: <explanation>
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "./types.js";

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
			<TouchableOpacity onPress={() => navigation.navigate("NouveauProduit")}>
				<Text style={styles.navText1}>Nouveau produit</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	navbar: {
		backgroundColor: "#3F6C7D",
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		paddingVertical: 10,
		// Ajustez la hauteur en fonction de vos besoins
		height: 60,
	},
	navText: {
		color: "white",
		fontSize: 16,
		fontFamily: "JetBrainsMono-Regular",
	},
	navText1: {
		color: "white",
		fontSize: 16,
		fontFamily: "JetBrainsMono-Regular",
	},
});

export default Navbar;
