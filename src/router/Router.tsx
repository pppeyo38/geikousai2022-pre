import { memo } from "react";
import { Routes, Route } from "react-router-dom";

import { TopPage } from "../components/pages/TopPage";
import { MoviePage } from "../components/pages/MoviePage";
import { DepaPage } from "../components/pages/DepaPage";
import { ChartPage } from "../components/pages/ChartPage";

import { Layout } from "../components/templates/Layout";

export const Router = memo(() => {
  return (
    <Routes>
      <Route
        path={"/"}
        element={
          <Layout>
            <TopPage />
          </Layout>
        }
      />
      <Route
        path={"/movie"}
        element={
          <Layout>
            <MoviePage />
          </Layout>
        }
      />
      <Route
        path={"/departments"}
        element={
          <Layout>
            <DepaPage />
          </Layout>
        }
      />
      <Route path={"/chart"} element={<ChartPage />} />
    </Routes>
  );
});
