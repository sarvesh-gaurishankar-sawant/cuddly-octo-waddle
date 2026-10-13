import { useReducer } from "react";
import { counterReducer, initialState } from "./counterReducer";

export function Counter() {
  const [{ count }, dispatch] = useReducer(counterReducer, initialState);

  return (
    <section className="counter" aria-labelledby="counter-heading">
      <h1 id="counter-heading">Counter</h1>
      <output className="counter__value" aria-live="polite">
        {count}
      </output>
      <div className="counter__actions">
        <button
          type="button"
          aria-label="Decrement"
          onClick={() => dispatch({ type: "decrement" })}
        >
          −
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: "reset" })}
          disabled={count === 0}
        >
          Reset
        </button>
        <button
          type="button"
          aria-label="Increment"
          onClick={() => dispatch({ type: "increment" })}
        >
          +
        </button>
      </div>
    </section>
  );
}
