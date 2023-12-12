import { screen, render, fireEvent } from "@testing-library/react";
import App from "./App";
import I18N from "./infra/i18n/i18n";
import { I18NPublisher } from "./infra/i18n/i18n-publisher";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: jest.fn(),
  }),
}));

jest.mock(
  "HarryPotter/App",
  () => ({
    __esModule: true,
    default: () => <div>Harry Potter Application</div>,
  }),
  {
    virtual: true,
  }
);

jest.mock(
  "RickAndMorty/App",
  () => ({
    __esModule: true,
    default: () => <div>Rick and Morty Application</div>,
  }),
  {
    virtual: true,
  }
);

const instanceSpy = jest.spyOn(I18N.prototype, "getI18nInstance");
const instancePublisher = jest.spyOn(I18NPublisher, "changeLanguage");

beforeEach(() => {
  instanceSpy.mockReturnValue({
    language: "en",
  } as never);
});

describe("Testing App", () => {
  it("Clicks change lang", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button"));
    expect(instancePublisher).toHaveBeenCalledWith("es");
  });

  it("Should change microfront", () => {
    render(<App />);
    expect(screen.getByText("Harry Potter Application")).toBeVisible();
    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "rick-and-morty" } });
    expect(screen.getByText("Rick and Morty Application")).toBeVisible();
  });
});
