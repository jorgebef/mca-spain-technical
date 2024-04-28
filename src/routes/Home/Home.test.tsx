// Imports
import { describe, it, expect } from "vitest";

import { Home } from "./Home";
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Tests
describe("Renders main page correctly", async () => {
	const queryClient = new QueryClient();

	it("Should render the page correctly", async () => {
		render(
			<QueryClientProvider client={queryClient}>
				<Home />
			</QueryClientProvider>,
		);
		const search = screen.queryByPlaceholderText("Filter podcasts...");
		expect(search).not.toBeNull();
	});
});
