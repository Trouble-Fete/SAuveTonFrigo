// Navigation.tsx
// biome-ignore lint/style/useImportType: <explanation>
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
	createNativeStackNavigator,
	type NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import Home from "./SRC/Componant/Home";
import MonFrigo from "./SRC/Componant/MonFrigo/MonFrigo";
import NouveauProduit from "./SRC/Componant/NouveauProduit/NouveauProduit"; // Assurez-vous que ce composant existe
import Layout from "./Layout";
import type { RootStackParamList } from "./SRC/Componant/types";

const Stack = createNativeStackNavigator<RootStackParamList>();

interface ScreenWithNavbarProps {
	navigation: NativeStackNavigationProp<
		RootStackParamList,
		keyof RootStackParamList
	>;
	children: React.ReactNode;
}

const ScreenWithNavbar: React.FC<ScreenWithNavbarProps> = ({
	navigation,
	children,
}) => {
	return <Layout navigation={navigation}>{children}</Layout>;
};

const Navigation: React.FC = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false, // Désactive le header natif pour utiliser notre Navbar personnalisée
				}}
			>
				<Stack.Screen
					name="Home"
					// biome-ignore lint/correctness/noChildrenProp: <explanation>
					children={({ navigation }) => (
						<ScreenWithNavbar navigation={navigation}>
							<Home />
						</ScreenWithNavbar>
					)}
					options={{ title: "Mon Frigo" }}
				/>
				<Stack.Screen
					name="MonFrigo"
					// biome-ignore lint/correctness/noChildrenProp: <explanation>
					children={({ navigation }) => (
						<ScreenWithNavbar navigation={navigation}>
							<MonFrigo />
						</ScreenWithNavbar>
					)}
					options={{ title: "Ton Frigo" }}
				/>
				<Stack.Screen
					name="NouveauProduit"
					// biome-ignore lint/correctness/noChildrenProp: <explanation>
					children={({ navigation }) => (
						<ScreenWithNavbar navigation={navigation}>
							<NouveauProduit />
						</ScreenWithNavbar>
					)}
					options={{ title: "Ajouter un produit" }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;
