// types/expo-camera.d.ts
declare module "expo-camera" {
	import * as React from "react";
	// biome-ignore lint/style/useImportType: <explanation>
	import { ViewStyle } from "react-native";

	export type CameraType = "front" | "back";

	export interface CameraPictureOptions {
		quality?: number;
		base64?: boolean;
		exif?: boolean;
	}

	export interface CameraCapturedPicture {
		uri: string;
		width: number;
		height: number;
		base64?: string;
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		exif?: any;
	}

	export interface CameraProps {
		style?: ViewStyle;
		type?: CameraType;
		onCameraReady?: () => void;
		// Ajoutez d'autres props si nécessaire
	}

	// Déclarez Camera comme un composant React utilisable en JSX
	export class Camera extends React.Component<CameraProps> {
		static requestCameraPermissionsAsync(): Promise<{
			status: "granted" | "denied";
		}>;
		// Note : si vous rencontrez toujours des problèmes avec l'accès à CameraType,
		// envisagez de le laisser non défini et de passer directement "back" ou "front" dans votre code.
		takePictureAsync(
			options?: CameraPictureOptions,
		): Promise<CameraCapturedPicture>;
	}
}
