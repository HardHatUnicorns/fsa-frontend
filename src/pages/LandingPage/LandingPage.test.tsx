import { render } from "@testing-library/react";
import { vi } from "vitest";
import { LandingPageDefault } from "./LandingPage";

vi.mock("react-query", () => ({
  useQuery: () => ({
    data: [],
    status: "success",
  }),
}));

describe("<LandingPageDefault />", () => {
  it("should render", () => {
    const { container } = render(<LandingPageDefault />);
    expect(container).toBeInTheDocument();
  });
});
