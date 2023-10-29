import { render, fireEvent, screen } from "@testing-library/react";
import Image from "./index";

describe("Image", () => {
  const mockImageSrc = "https://images.pexels.com/photos/355036/pexels-photo-355036.jpeg?h=350&auto=compress&cs=tinysrgb";

  it("renders the image with correct attributes", () => {
    render(
      <Image src={mockImageSrc} width={100} height={100} alt="Test Image" />
    );
    const imageElement = screen.getByAltText("Test Image");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", mockImageSrc);
    expect(imageElement).toHaveAttribute("width", "100");
    expect(imageElement).toHaveAttribute("height", "100");
    expect(imageElement).toHaveAttribute("loading", "eager");
  });

  it("sets loading attribute to lazy when lazy prop is true", () => {
    render(
      <Image
        src={mockImageSrc}
        width={100}
        height={100}
        alt="Test Image"
        lazy={true}
      />
    );
    const imageElement = screen.getByAltText("Test Image");
    expect(imageElement).toHaveAttribute("loading", "lazy");
  });

  it("renders LoadingContainer while isLoading state is true", () => {
    render(
      <Image src={mockImageSrc} width={100} height={100} alt="Test Image" />
    );
    const loadingContainer = screen.getByTestId("loading-container");
    expect(loadingContainer).toBeInTheDocument();
  });

  it("removes LoadingContainer after image loads", () => {
    render(
      <Image src={mockImageSrc} width={100} height={100} alt="Test Image" />
    );
    const imageElement = screen.getByAltText("Test Image");
    fireEvent.load(imageElement);
    expect(screen.queryByTestId("loading-container")).not.toBeInTheDocument();
  });
});
