import { Unity, useUnityContext } from "react-unity-webgl";

export const GamePage = () => {
	// const { unityProvider } = useUnityContext({
	// 	loaderUrl: `${process.env.PUBLIC_URL}/UnityBuild/build-test.loader.js`,
	// 	dataUrl: `${process.env.PUBLIC_URL}/UnityBuild/build-test.data`,
	// 	frameworkUrl: `${process.env.PUBLIC_URL}/UnityBuild/build-test.framework.js.gz`,
	// 	codeUrl: `${process.env.PUBLIC_URL}/UnityBuild/build-test.wasm.gz`,
	// 	webglContextAttributes: {
  //     preserveDrawingBuffer: true,
  //   },
	// });

	return (
		<>
			{/* <Unity unityProvider={unityProvider} /> */}
			<p>ミニゲーム</p>
		</>
	);
}