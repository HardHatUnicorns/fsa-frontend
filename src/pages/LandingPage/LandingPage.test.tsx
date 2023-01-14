import { render } from "@testing-library/react";
import { LandingPageDefault } from "./LandingPage";

describe("<LandingPageDefault />", () => {
  it("should render", () => {
    const { container } = render(<LandingPageDefault />);
    expect(container).toBeInTheDocument();
  });
});
