import { memo } from "react";
import { Routes, Route } from "react-router-dom";

import { TopPage } from "../components/pages/TopPage";
import { MoviePage } from "../components/pages/MoviePage";
import { DepaPage } from "../components/pages/DepaPage";
import { ChartPage } from "../components/pages/ChartPage";
import { GamePage } from "../components/pages/GamePage";

import { Layout } from "../components/templates/Layout";

export const Router = memo(() => {
	return (
		<Routes>
			<Route
				path={`${process.env.REACT_APP_PUBLIC_URL}/`}
				element={ <Layout><TopPage /></Layout> }
			/>
			<Route
				path={`${process.env.REACT_APP_PUBLIC_URL}/movie`}
				element={ <Layout><MoviePage /></Layout> }
			/>
			<Route
				path={`${process.env.REACT_APP_PUBLIC_URL}/departments`}
				element={ <Layout><DepaPage /></Layout> }
			/>
			<Route
				path={`${process.env.REACT_APP_PUBLIC_URL}/chart`}
				element={ <ChartPage /> }
			/>
			<Route
				path={`${process.env.REACT_APP_PUBLIC_URL}/game`}
				element={ <GamePage /> }
			/>
		</Routes>
	);
})