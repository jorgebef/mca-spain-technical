// Imports
import { describe, it, expect } from "vitest";

import { render, screen } from "@testing-library/react";
import { RootLayout } from "@/layouts/RootLayout";
import { BrowserRouter } from "react-router-dom";

// Tests
describe("Renders main page correctly", async () => {
	it("Should render the page correctly", async () => {
		render(
			<BrowserRouter>
				<RootLayout />
			</BrowserRouter>,
		);
		const podcaster = screen.queryByText("Podcaster");
		expect(podcaster).not.toBeNull();
	});
});
