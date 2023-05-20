import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import Calendar from "./Calendar";

describe("Calendar", () => {
  const selectedDate = "10/10/2023";
  const date = new Date(selectedDate.split("/").reverse().join("-"));
  const year = date.getFullYear().toString();
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.getDate();

  beforeEach(() => {
    render(<Calendar date={selectedDate} />);
  });

  afterEach(cleanup);

  it("renders the correct year", () => {
    expect(screen.getByTestId("year").textContent).toBe(year);
  });

  it("renders the correct month", () => {
    expect(screen.getByTestId("month").textContent).toBe(month);
  });

  it("renders the correct date", () => {
    expect(screen.getByTestId("day-" + day).textContent).toBe(day.toString());
  });

  it("highlights the given date", () => {
    expect(screen.getByTestId("day-" + day)).toHaveClass("Day--selected");
  });
});
