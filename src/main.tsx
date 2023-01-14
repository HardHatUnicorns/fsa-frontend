import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LandingPage, LandingPageDefault } from "./pages/LandingPage";
import { MovieDetailsPage } from "./pages/MovieDetails";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { MoviesPage } from "~/pages/MoviesPage";
import { CinemaFacilitiesPage } from "~/pages/CinemaFacilitiesPage";
import { CinemaFacilityDetailsPage } from "~/pages/CinemaFacilityDetailsPage/CinemaFacilityDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    children: [
      { path: "/", element: <LandingPageDefault /> },
      { path: "/movies", element: <MoviesPage /> },
      {
        path: "movies/:movieId",
        element: <MovieDetailsPage />,
      },
      {
        path: "cinema-facilities/:cinemaId",
        element: <CinemaFacilitiesPage />,
      },
      {
        path: "cinema-facility/:facilityId",
        element: <CinemaFacilityDetailsPage />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
