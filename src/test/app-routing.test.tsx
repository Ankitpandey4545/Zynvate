import { cleanup, render, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { HomePage } from "@/components/home/HomePage";

afterEach(() => {
  cleanup();
});

describe("App", () => {
  it("renders the home page", async () => {
    const { container } = render(<HomePage />);

    await waitFor(() => expect(container.firstChild).not.toBeNull());
    expect(container.querySelector("#top")).not.toBeNull();
    expect(container.querySelector("#technologies")).not.toBeNull();
    expect(container.querySelector("#process")).not.toBeNull();
    expect(container.querySelector("#faq")).not.toBeNull();
    expect(container.querySelector("#contact")).not.toBeNull();
  });
});
