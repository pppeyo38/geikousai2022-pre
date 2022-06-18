import { Unity, useUnityContext } from "react-unity-webgl";

export const GamePage = () => {
	const { unityProvider } = useUnityContext({
		loaderUrl: `${process.env.PUBLIC_URL}/Build/geikosai616.loader.js`,
		dataUrl: `${process.env.PUBLIC_URL}/Build/geikosai616.data`,
		frameworkUrl: `${process.env.PUBLIC_URL}/Build/geikosai616.framework.js`,
		codeUrl: `${process.env.PUBLIC_URL}/Build/geikosai616.wasm`,
		// webglContextAttributes: {
    //   preserveDrawingBuffer: true,
    // },
	});

	return (
		<>
			<Unity unityProvider={unityProvider} />
			<p>ミニゲーム</p>
		</>
	);
}