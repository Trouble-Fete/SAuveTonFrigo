// biome-ignore lint/style/useImportType: <explanation>
import React from "react";
import { View, StyleSheet } from "react-native";
import Navbar from "../SauveTonFrigo/SRC/Componant/Navbar";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../SauveTonFrigo/SRC/Componant/types";

interface LayoutProps {
	children: React.ReactNode;
	navigation: NativeStackNavigationProp<
		RootStackParamList,
		keyof RootStackParamList
	>;
}

const Layout: React.FC<LayoutProps> = ({ children, navigation }) => {
	return (
		<View style={styles.container}>
			<View style={styles.content}>{children}</View>
			<View style={styles.navbarContainer}>
				<Navbar navigation={navigation} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	content: {
		flex: 1,
	},
	navbarContainer: {
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		height: 60,
	},
});

export default Layout;
