import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import PostPage from "../components/pages/Post";
import * as localStorage from "../helpers/localStorage";

jest.mock("../helpers/localStorage", () => ({
  getPostById: jest.fn(),
}));

describe("PostPage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders post title and content", async () => {
    const postId = "1";
    localStorage.getPostById.mockReturnValueOnce({
      title: "Test Title",
      content: "<p>Test Content</p>",
    });
    render(
      <MemoryRouter initialEntries={[`/post/${postId}`]}>
        <Routes>
          <Route path="/post">
            <Route path=":postId" element={<PostPage />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Content")).toBeInTheDocument();
    expect(localStorage.getPostById).toHaveBeenCalledWith(postId);
  });

  test('renders "Back to Blog" button', async () => {
    render(
      <MemoryRouter>
        <PostPage />
      </MemoryRouter>
    );

    expect(screen.getByText("Back to Blog")).toBeInTheDocument();
  });
});
