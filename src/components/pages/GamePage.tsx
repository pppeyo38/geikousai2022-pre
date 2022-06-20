import { useEffect, memo } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export const GamePage = memo(() => {

	useEffect(() => {
		window.scrollTo(0, 0)
	}, []);

	const { unityProvider } = useUnityContext({
		loaderUrl: `${process.env.PUBLIC_URL}/GameBuild/Build/geikosai620.loader.js`,
		dataUrl: `${process.env.PUBLIC_URL}/GameBuild/Build/geikosai620.data`,
		frameworkUrl: `${process.env.PUBLIC_URL}/GameBuild/Build/geikosai620.framework.js`,
		codeUrl: `${process.env.PUBLIC_URL}/GameBuild/Build/geikosai620.wasm`,
	});

	return (
		<>
			<Unity unityProvider={unityProvider} style={{ width: '390px', height: '844px' }}  />
		</>
	);
})