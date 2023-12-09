# for a translation problem seems practical enough

def eval_rpn(tokens: list[str]) -> int:
  stack: list[int] = []
  operators = {
      "-": lambda a, b: a - b,
      "+": lambda a, b: a + b,
      "*": lambda a, b: a * b,
      "/": lambda a, b: a // b,
  }

  for token in tokens:
    if operator := operators.get(token):
      operand2 = stack.pop()
      operand1 = stack.pop()
      result = operator(operand1, operand2)
      stack.append(result)
    else:
      try:
        stack.append(int(token))
      except ValueError as err:
        raise ValueError(f"not a token: {token}") from err

  if len(stack) != 1:
    raise ValueError("false expression")

  return stack[0]


print(eval_rpn(["2", "1", "+", "3", "*"]))  # 9

print(eval_rpn(["4", "13", "5", "/", "+"]))  # 6

print(
    eval_rpn(
        ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]))  #22
