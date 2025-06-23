export function buildPrompt(code: string, instructions?: string) {
  const focus = instructions || "code correctness, performance, best practices";
  return `
Please review the following JavaScript code for:
${focus}

Code:
${code}
`;
}

