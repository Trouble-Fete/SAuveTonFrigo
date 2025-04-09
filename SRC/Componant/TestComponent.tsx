import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";

function NouveauProduit() {
	return (
		<SafeAreaView style={styles.safeArea}>
			<ScrollView>
				<Text style={styles.textTitle}>
					Merci à tous pour ces 5 derniers mois!!!!
				</Text>
				<View style={styles.container}>
					<Text style={styles.text}>
						Pour commencer, Merci à la Wild pour le contenu de la formation
					</Text>
					<Text style={styles.text}>
						Pour continuer, Merci a mes collègues de formation, leur partage de
						leurs connaissances et compétences fut une richesse pour moi et je
						pense pour les tout le monde!
					</Text>
					<Text style={styles.text}>
						Pour continuer, Merci a la Table 3, qui aura été presente tout le
						long de la formation, certes avec quelques suspension, masi faut
						bine s'ouvrir aux autres!
					</Text>
					<Text style={styles.text}>
						Pour finir, Merci a Abdou et Flo qui ont été vraiment de tres bon
						pedagogue, et surtout toujours un esprit bienveillant. Ne changez
						pas les gars, car votre pedagogie est vraiment top pour les adultes!
					</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: "#3F6C7D",
	},
	textTitle: {
		color: "white",
		fontFamily: "JetBrainsMono-Variable",
		fontSize: 20,
		marginTop: 40,
		textAlign: "center",
	},
	text: {
		color: "white",
		fontFamily: "JetBrainsMono-Variable",
		fontSize: 20,
		textAlign: "left",
		marginBottom: 10,
	},
	container: {
		marginTop: 40,
		marginHorizontal: 20,
	},
});
export default NouveauProduit;
