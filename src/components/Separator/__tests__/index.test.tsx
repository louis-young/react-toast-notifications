import { render, screen } from "@testing-library/react";
import { Separator } from "..";

describe("Separator", () => {
  it("renders the separator", () => {
    render(<Separator />);

    const separator = screen.getByRole("separator");

    expect(separator).toBeInTheDocument();
  });
});
