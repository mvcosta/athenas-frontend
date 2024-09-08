export async function getPaginatedPageData<T>(
  searchParams: {
    [key: string]: string | string[] | undefined;
  },
  getFn: getFn<T>,
  pagePrefix?: string
) {
  const { page, limit } = getPageFromParams(searchParams, pagePrefix);
  const { data, count } = await getFn(page, limit);
  const lastPage = calcLastPage(count, limit);
  return { data, page, lastPage };
}

export function getPageFromParams(
  searchParams: {
    [key: string]: string | string[] | undefined;
  },
  pagePrefix = ""
) {
  const page = Number(searchParams?.[`${pagePrefix}Page`] ?? "1");
  const limit = Number(searchParams?.[`${pagePrefix}Limit`] ?? "10");

  return { page, limit };
}

export function calcLastPage(count: number, limit: number) {
  return Math.ceil(count / limit);
}

type getFn<T> = (
  page?: number,
  limit?: number
) => Promise<{
  data: T[];
  count: number;
}>;
