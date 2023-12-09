function evalRPN(tokens: string[]): number {
  const stack: number[] = [];
  interface Operators {
    [key: string]: (a: number, b: number) => number;
  }
  const operators: Operators = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
    "/": (a, b) => Math.trunc(a / b),
    "*": (a, b) => a * b,
  };

  for (const token of tokens) {
    if (operators[token]) {
      const operand2 = stack.pop()!;
      const operand1 = stack.pop()!;
      const result = operators[token](operand1, operand2);
      stack.push(result);
    } else {
      stack.push(Number(token));
    }
  }

  return stack[0];
}

console.log(evalRPN(["2","1","+","3","*"])) // output 9
console.log(evalRPN(["4","13","5","/","+"])) // output 6
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])) // output 22
