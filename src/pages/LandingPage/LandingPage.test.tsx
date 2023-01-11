import { render } from "@testing-library/react";
import { LandingPage } from "./LandingPage";

describe("<LandingPage />", () => {
  it("should render", () => {
    const { container } = render(<LandingPage />);
    expect(container).toBeInTheDocument();
  });
});
