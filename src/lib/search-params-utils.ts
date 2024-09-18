import { ReadonlyURLSearchParams } from "next/navigation";

export function validateSearchParams(
  val: unknown
): asserts val is string | undefined {
  if (typeof val !== "string" && typeof val !== "undefined") {
    throw new Error("Search deve ser uma string");
  }
}

export function updateSearchParam(
  searchParams: ReadonlyURLSearchParams,
  paramKey: string,
  paramValue: string
) {
  const current = new URLSearchParams(Array.from(searchParams.entries()));
  current.set(paramKey, paramValue);
  const newQuery = current.toString();
  const query = newQuery ? `?${newQuery}` : "";

  return query;
}

export function deleteSearchParam(
  searchParams: ReadonlyURLSearchParams,
  paramKey: string
) {
  const current = new URLSearchParams(Array.from(searchParams.entries()));
  current.delete(paramKey);
  const newQuery = current.toString();
  console.log(newQuery);

  const query = newQuery ? `?${newQuery}` : "";

  return query;
}
