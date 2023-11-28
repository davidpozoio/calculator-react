import { buttonMap } from "../services/buttonMap";

export function Keyboard({ onChange }) {
  return (
    <div>
      {buttonMap.map((sign, index) => {
        return (
          <button key={index} onClick={() => onChange(sign)}>
            {sign}
          </button>
        );
      })}
    </div>
  );
}
