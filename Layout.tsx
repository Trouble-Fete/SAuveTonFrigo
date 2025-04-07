// Layout.tsx
import type React from "react";
import { View, StyleSheet } from "react-native";
import Navbar from "../SauveTonFrigo/SRC/Componant/Navbar";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../SauveTonFrigo/SRC/Componant/types"; // ou définissez-le ici

interface LayoutProps {
	children: React.ReactNode;
	navigation: NativeStackNavigationProp<RootStackParamList>;
}

const Layout: React.FC<LayoutProps> = ({ children, navigation }) => {
	return (
		<View style={styles.container}>
			<Navbar navigation={navigation} />
			<View style={styles.content}>{children}</View>
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
});

export default Layout;
