import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./routes/Home.tsx";
import { RootLayout } from "./layouts/RootLayout.tsx";
import ErrorPage from "./routes/ErrorPage.tsx";
import { PodcastId } from "./routes/PodcastId.tsx";
import { PodcastLayout } from "./layouts/PodcastLayout.tsx";

const router = createBrowserRouter([
	{ errorElement: <ErrorPage /> },
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{ index: true, element: <Home /> },
			{
				path: "/podcast",
				element: <PodcastLayout />,
				children: [{ path: "/podcast/:podcastId", element: <PodcastId /> }],
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
