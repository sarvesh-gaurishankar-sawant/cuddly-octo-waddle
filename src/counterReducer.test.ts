import { counterReducer, initialState } from "./counterReducer";

describe("counterReducer", () => {
  it("increments", () => {
    expect(counterReducer({ count: 1 }, { type: "increment" })).toEqual({ count: 2 });
  });

  it("decrements below zero", () => {
    expect(counterReducer({ count: 0 }, { type: "decrement" })).toEqual({ count: -1 });
  });

  it("resets to the initial state", () => {
    expect(counterReducer({ count: 42 }, { type: "reset" })).toEqual(initialState);
  });
});
