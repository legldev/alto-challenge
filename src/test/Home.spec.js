import { render, screen } from "@testing-library/react";
import Home from "../components/pages/Home";
import ImageHero from "../components/atoms/ImageHero";
import { Content } from "../components/molecules/Content";

describe("Home", () => {
  test("renders component with correct elements", async () => {
    render(<Home />);

    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getAllByRole("img")[0]).toBeInTheDocument();
    expect(screen.getByAltText("Hero Image")).toBeInTheDocument();
  });

  test("renders ImageHero component with correct props", async () => {
    const heroSrc = "https://via.placeholder.com/1200x400";
    render(<ImageHero src={heroSrc} alt="Hero Image" />);

    expect(screen.getByRole("img")).toHaveAttribute("src", heroSrc);
    expect(screen.getByAltText("Hero Image")).toBeInTheDocument();
  });
});
