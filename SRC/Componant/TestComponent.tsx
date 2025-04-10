import React from "react";
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	SafeAreaView,
	ImageBackground,
	Dimensions,
} from "react-native";

// Récupère la largeur et la hauteur de la fenêtre (en pixels)
const { width, height } = Dimensions.get("window");

function NouveauProduit() {
	return (
		<View style={styles.containerMain}>
			{/* Image de fond avec rotation */}
			<ImageBackground
				source={{
					uri: "https://campusnumerique.auvergnerhonealpes.fr/app/uploads/2020/06/Logo-Wild-new.jpg",
				}}
				// Largeur fixée à la hauteur de l'écran, et inversement, pour compenser la rotation
				style={[
					styles.backgroundImage,
					{ width: height, height: width },
					styles.rotatedImage,
				]}
				resizeMode="cover"
			/>
			{/* Contenu par-dessus */}
			<SafeAreaView style={styles.safeArea}>
				<ScrollView contentContainerStyle={styles.scrollContainer}>
					<Text style={styles.textTitle}>
						Merci à tous pour ces 5 derniers mois!!!!
					</Text>
					<View style={styles.containerContent}>
						<Text style={styles.text}>
							Pour commencer, Merci à la Wild pour le contenu de la formation
						</Text>
						<Text style={styles.text}>
							Pour continuer, Merci à mes collègues de formation, leur partage
							de leurs connaissances et compétences furent une richesse pour moi
							et je pense pour tout le monde!
						</Text>
						<Text style={styles.text}>
							Pour continuer, Merci à la Table 3, qui aura été présente tout le
							long de la formation, certes avec quelques suspensions, mais faut
							bien s'ouvrir aux autres!
						</Text>
						<Text style={styles.text}>
							Pour finir, Merci à Abdou et Flo qui ont été vraiment de très bons
							pédagogues, et surtout toujours avec un esprit bienveillant. Ne
							changez pas les gars, car votre pédagogie est vraiment top pour
							les adultes!
						</Text>
					</View>
				</ScrollView>
			</SafeAreaView>
		</View>
	);
}

const styles = StyleSheet.create({
	containerMain: {
		flex: 1,
	},
	backgroundImage: {
		position: "absolute",
		top: 190,
		left: 0,
	},
	rotatedImage: {
		// 1) Rotation de 90°
		// 2) translateX et translateY pour recentrer l'image sur l'écran
		transform: [
			{ rotate: "90deg" },
			{ translateX: (width - height) / 902 },
			{ translateY: (height - width) / 2 },
		],
	},
	safeArea: {
		flex: 1,
		backgroundColor: "transparent", // pour laisser transparaître l'image de fond
	},
	scrollContainer: {
		flexGrow: 1,
	},
	textTitle: {
		color: "black",
		fontFamily: "JetBrainsMono-Variable",
		fontSize: 20,
		marginTop: 40,
		textAlign: "center",
	},
	text: {
		color: "black",
		fontFamily: "JetBrainsMono-Variable",
		fontSize: 20,
		textAlign: "left",
		marginBottom: 10,
	},
	containerContent: {
		marginTop: 40,
		marginHorizontal: 20,
	},
});

export default NouveauProduit;
