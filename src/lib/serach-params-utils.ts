export function validateSearchParams(
  val: unknown
): asserts val is string | undefined {
  if (typeof val !== "string" && typeof val !== "undefined") {
    throw new Error("Search deve ser uma string");
  }
}
