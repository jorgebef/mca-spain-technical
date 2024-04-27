import style from "./Layout.module.css";
import { Topbar } from "../components/Topbar/Topbar";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";

const queryClient = new QueryClient();

export const RootLayout = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<div className={style.container}>
				<Topbar />
				<div className={style.content}>
					<Outlet />
				</div>
			</div>
		</QueryClientProvider>
	);
};
