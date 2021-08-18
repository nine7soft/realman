import { useCategories } from "../../hooks/useCategories";
import { renderHookWithStore } from "../../lib/react-testing-library-extensions/renderHookWithStore";

describe("Categories hook", () => {
  it("should return all categories as array", () => {
    const initialState = {
      entities: {
          categories: {
            byId: {
                country: {
                    id: "country",
                    value: "Country",
                }
            },
          }
      },
    };

    const { result } = renderHookWithStore(
      () => useCategories(),
      initialState
    );

    const categories = result.current;

    expect(categories.length).toBe(1);
    expect(categories[0].id).toBe("country");
  });
});
