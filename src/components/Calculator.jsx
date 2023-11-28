import { Keyboard } from "./Keyboard";
import { Screen } from "./Screen";
import { calculateInstruction } from "../utils/calculateInstruction";
import { useReducer } from "react";

function handleInstruction(state, action) {
  console.log(
    "multiply and division",
    action.newIntruction.match(/(-?\d+([x|/]-?\d+)+)/g)
  );
  console.log(
    "add values",
    action.newIntruction.match(/(?<![x/\d])-?\d+(?![x/\d])/g)
  );
  /*   console.log("instruction ", action.newIntruction.match(/(-?\d+|\+|x)/g)); */
  return { ...state, instruction: action.newIntruction };
}

export function Calculator() {
  const [state, dispatch] = useReducer(handleInstruction, { instruction: "0" });

  const handleKey = (key) => {
    dispatch({ newIntruction: state.instruction + key });
  };

  return (
    <div>
      <Screen value={state.instruction} />
      <Keyboard onChange={handleKey} />
    </div>
  );
}
