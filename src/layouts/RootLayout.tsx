import style from "./Layout.module.css";
import { Topbar } from "@/components/Topbar/Topbar";

import { QueryClient } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			// antiguo cacheTime
			gcTime: 24 * 3600 * 1000,
		},
	},
});

// persistir los datos en localstorage usando React Query
// esta es una manera más sencilla y óptima que hacerlo yo mismo
// además de mucho más rápido.
// Si quisiera implementar yo mismo esta funcionalidad, usaría
// window.localStorage.setItem y getItem con un valor para
// Date del momento de guardado y compararlo en cada render
// con el momento de lectura, para invalidar y re-fetchear
// si fuera necesario
const persister = createSyncStoragePersister({
	storage: window.localStorage,
});

export const RootLayout = () => {
	return (
		<PersistQueryClientProvider
			client={queryClient}
			persistOptions={{ persister }}
		>
			<div className={style.container}>
				<Topbar />
				<div className={style.content}>
					<Outlet />
				</div>
			</div>
		</PersistQueryClientProvider>
	);
};
