// biome-ignore lint/style/useImportType: <explanation>
import React from "react";
import {
	SafeAreaView,
	ScrollView,
	Image,
	Text,
	StyleSheet,
	View,
	Button,
	Platform,
	Dimensions,
} from "react-native";
import STF from "../assets/logo_STF.png";

const Home: React.FC = () => {
	return (
		<SafeAreaView style={styles.safeArea}>
			<ScrollView contentContainerStyle={styles.contentContainer}>
				<View style={styles.imageWrapper}>
					<Image source={STF} style={styles.logo} />
				</View>

				<View style={styles.textContainer}>
					<Text style={styles.text}>Le concept est simple:</Text>
					<Text style={styles.text}>
						Tu prends en photo ton aliment dans ton frigo.
					</Text>
					<Text style={styles.text}>Tu entres la date de péremption.</Text>
					<Text style={styles.text}>
						Ensuite c'est simple, on s'occupe de tout. On te prévient des
						produits à consommer rapidement afin de ne pas gaspiller ton argent,
						et sauver la planète!
					</Text>
					<Text style={styles.text}>Pratique non?? À toi de jouer!</Text>
				</View>

				<Button
					title="Commencer maintenant"
					onPress={() => console.log("Bouton cliqué !")}
				/>
			</ScrollView>
		</SafeAreaView>
	);
};

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: "#3F6C7D",
	},
	contentContainer: {
		flexGrow: 1,
		paddingBottom: Platform.OS === "ios" ? 30 : 40,
		paddingHorizontal: 20,
	},
	imageWrapper: {
		alignItems: "center",
		marginBottom: 20,
	},
	logo: {
		width: screenWidth - 20,
		height: 200,
		resizeMode: "cover",
		borderRadius: 12,
	},
	textContainer: {
		marginBottom: 20,
	},
	text: {
		color: "white",
		fontSize: 20,
		fontFamily: "JetBrainsMono-Variable",
		marginBottom: 10,
	},
});

export default Home;
