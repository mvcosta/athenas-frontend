export function getPageFromParams(searchParams: {
  [key: string]: string | string[] | undefined;
}) {
  const page = Number(searchParams.page ?? "1");
  const limit = Number(searchParams.limit ?? "20");
  return { page, limit };
}

export function calcLastPage(count: number, limit: number) {
  return Math.ceil(count / limit);
}
