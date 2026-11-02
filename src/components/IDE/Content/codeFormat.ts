/** Non-breaking spaces for `level` levels of 4-space indentation */
export const indent = (level: number) => '\u00a0'.repeat(level * 4);

/** Formats a list of strings as a Python list literal body: "a", "b", "c" */
export const pyList = (items: string[]) => items.map((i) => `"${i}"`).join(', ');
