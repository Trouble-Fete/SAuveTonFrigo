// Navigation.tsx
import type React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
	createNativeStackNavigator,
	type NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import Home from "./SRC/Componant/Home";
import MonFrigo from "./SRC/Componant/MonFrigo/MonFrigo";
import Layout from "./Layout";

// Si tu as déjà un fichier types.ts qui exporte RootStackParamList, importe-le.
// Sinon, définis-le ici :
export type RootStackParamList = {
	Home: undefined;
	MonFrigo: undefined;
	About: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

// Définition des props pour le wrapper qui inclut la Navbar via Layout.
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
					// On désactive le header natif pour utiliser notre Navbar personnalisée
					headerShown: false,
				}}
			>
				<Stack.Screen
					name="Home"
					// La fonction children reçoit un objet { navigation, route }.
					// Ici, nous utilisons uniquement navigation.
					children={({ navigation }) => (
						<ScreenWithNavbar navigation={navigation}>
							<Home />
						</ScreenWithNavbar>
					)}
					options={{ title: "Mon Frigo" }}
				/>
				<Stack.Screen
					name="MonFrigo"
					children={({ navigation }) => (
						<ScreenWithNavbar navigation={navigation}>
							<MonFrigo />
						</ScreenWithNavbar>
					)}
					options={{ title: "Ton Frigo" }}
				/>
				<Stack.Screen
					name="Connexion"
					children={({ navigation }) => (
						<ScreenWithNavbar navigation={navigation}>
							{/* Exemple d'écran About */}
							<Text style={{ padding: 20, fontSize: 18 }}>Page À propos</Text>
						</ScreenWithNavbar>
					)}
					options={{ title: "Connexion" }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;
