export function splitDisplayName(name: string) {
  const parts = name.trim().split(/\s+/);

  if (parts.length <= 1) {
    return { first: parts[0] ?? "", last: "" };
  }

  return {
    first: parts[0],
    last: parts.slice(1).join(" "),
  };
}
