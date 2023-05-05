import { render, screen } from "@testing-library/react";
import ContactPage from "../components/pages/ContactUs";
describe("ContactPage", () => {
  it("renders the contact information", () => {
    render(<ContactPage />);

    const contactInfo = screen.getByText("Contact Information");
    expect(contactInfo).toBeInTheDocument();

    const email = screen.getByText("john.doe@example.com");
    expect(email).toBeInTheDocument();

    const phone = screen.getByText("+1 (555) 123-4567");
    expect(phone).toBeInTheDocument();
  });
});
