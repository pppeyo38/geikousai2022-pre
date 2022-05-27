import { memo } from "react";
import { Routes, Route } from "react-router-dom";

import { TopPage } from "../components/pages/TopPage";
import { MoviePage } from "../components/pages/MoviePage";
import { DepaPage } from "../components/pages/DepaPage";
import { ChartPage } from "../components/pages/ChartPage";
import { GamePage } from "../components/pages/GamePage";

import { HeaderLayout } from "../components/templates/HeaderLayout";

export const Router = memo(() => {
	return (
		<Routes>
			<Route
				path="/"
				element={ <HeaderLayout><TopPage /></HeaderLayout> }
			/>
			<Route
				path="/movie"
				element={ <MoviePage /> }
			/>
			<Route
				path="/departments"
				element={ <DepaPage /> }
			/>
			<Route
				path="/chart"
				element={ <ChartPage /> }
			/>
			<Route
				path="/game"
				element={ <GamePage /> }
			/>
		</Routes>
	);
})