import { render, screen, cleanup } from "@testing-library/react";
import App from "./App";

jest.mock("./components/Particle", () => () => null);
jest.mock("react-pdf", () => ({
  Document: ({ children }) => <div>{children}</div>,
  Page: () => <div>PDF preview</div>,
}));
jest.mock("pdfjs-dist", () => ({
  GlobalWorkerOptions: {},
  version: "4.8.69",
}));

beforeEach(() => {
  jest.spyOn(window, "scrollTo").mockImplementation(() => {});
});

afterEach(() => {
  cleanup();
  jest.restoreAllMocks();
});

test.each([
  ["/", /let me introduce myself/i],
  ["/about", /know who i'm/i],
  ["/project", /my recent works/i],
])("opens the %s route", (route, heading) => {
  window.location.hash = route;
  render(<App />);
  expect(screen.getByRole("heading", { name: heading })).toBeInTheDocument();
});

test("both CV buttons link to the same canonical document", () => {
  window.location.hash = "/resume";
  render(<App />);
  const links = screen.getAllByRole("button", { name: /download cv/i });
  expect(links).toHaveLength(2);
  links.forEach((link) => {
    expect(link).toHaveAttribute("href", "/Assets/Ziyad.Asiri-CV.pdf");
  });
});

test("removes the navbar scroll listener when the app unmounts", () => {
  const addListener = jest.spyOn(window, "addEventListener");
  const removeListener = jest.spyOn(window, "removeEventListener");
  window.location.hash = "/about";
  const { unmount } = render(<App />);
  const scrollListeners = addListener.mock.calls.filter(([event]) => event === "scroll");
  expect(scrollListeners).toHaveLength(1);
  unmount();
  expect(removeListener).toHaveBeenCalledWith("scroll", scrollListeners[0][1]);
});
