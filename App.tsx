// App.tsx
import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import Navigation from "../SauveTonFrigo/Navigation";

const fetchFonts = () => {
	return Font.loadAsync({
		"JetBrainsMono-Regular": require("../SauveTonFrigo/SRC/assets/font/JetBrainsMono-Regular.ttf"),
	});
};

export default function App() {
	const [fontLoaded, setFontLoaded] = useState(false);

	if (!fontLoaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setFontLoaded(true)}
				onError={console.warn}
			/>
		);
	}

	return <Navigation />;
}
