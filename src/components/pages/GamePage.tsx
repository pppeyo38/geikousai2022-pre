import { useEffect, memo } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export const GamePage = memo(() => {

	useEffect(() => {
		window.scrollTo(0, 0)
	}, []);

	const { unityProvider } = useUnityContext({
		loaderUrl: `${process.env.PUBLIC_URL}/GameBuild/Build/geikosai_kan.loader.js`,
		dataUrl: `${process.env.PUBLIC_URL}/GameBuild/Build/geikosai_kan.data`,
		frameworkUrl: `${process.env.PUBLIC_URL}/GameBuild/Build/geikosai_kan.framework.js`,
		codeUrl: `${process.env.PUBLIC_URL}/GameBuild/Build/geikosai_kan.wasm`,
	});

	return (
		<>
			<div className="game-display__wrap">
				<Unity unityProvider={unityProvider} style={{ width: '390px', height: '844px' }}  />
			</div>
		</>
	);
})