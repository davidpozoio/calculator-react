export function calculateInstruction(instruction = []) {
  if (instruction.length < 3) return;

  const newInstruction = [...instruction];

  for (let i = 0; i < Math.ceil(instruction.length / 3); i++) {
    let result = calculateOperation(
      +newInstruction[0],
      newInstruction[1],
      +newInstruction[2]
    );
    newInstruction.splice(0, 3, result);
    console.log(newInstruction);
  }
  return newInstruction[0];
}

export function calculateOperation(a, operator, b) {
  if (operator === "+") return a + b;
  if (operator === "-") return a - b;
  if (operator === "x") return a * b;
}
