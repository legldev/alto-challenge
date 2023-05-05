import { render, screen } from "@testing-library/react";
import AboutUs from "../components/pages/AboutUs";

describe("AboutUs", () => {
  test("renders component with correct content", async () => {
    render(<AboutUs />);

    expect(screen.getByText("About Us")).toBeInTheDocument();
  });
});
