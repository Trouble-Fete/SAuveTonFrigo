// SRC/MyCamera.tsx
import React, { forwardRef } from "react";
import { Platform } from "react-native";

// Le wrapper rend le composant Camera uniquement sur mobile.
// On utilise require dynamiquement pour obtenir le composant Camera.
const MyCamera = forwardRef((props, ref) => {
	// Sur web, on renvoie null ou un composant alternatif.
	if (Platform.OS === "web") {
		return null;
	}
	// Pour Android/iOS, on charge dynamiquement le module expo-camera.
	const ExpoCamera = require("expo-camera");
	// ExpoCamera.Camera devrait correspondre au composant Camera.
	return <ExpoCamera.Camera {...props} ref={ref} />;
});

export default MyCamera;
