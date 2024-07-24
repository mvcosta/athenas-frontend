export async function authAPIPaginatedFetch(
  endpoint: string,
  page: number = 0,
  limit: number = 10,
  init?: RequestInit
): Promise<Response> {
  const offset = (page - 1) * limit;
  const query = `limit=${limit}&offset=${offset}`;

  const separator = endpoint.includes("?") ? "&" : "?";
  const url = `${endpoint}${separator}${query}`;

  return authAPIFetch(url, init);
}

export async function authAPIFetch(
  endpoint: string,
  init?: RequestInit
): Promise<Response> {
  const url = `http://localhost/api/${endpoint}`;
  return authFetch(url, init);
}

async function authFetch(
  input: string | URL | globalThis.Request,
  init?: RequestInit
): Promise<Response> {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await delay(500);

  const token = process.env.NEXT_PUBLIC_AUTH_TOKEN;
  const config = {
    ...init,
    headers: {
      ...init?.headers,
      Authorization: `Token ${token}`,
    },
  };
  const response = await fetch(input, config);

  if (!response.ok) {
    const error = new FetchError("Erro ao buscar os dados");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  return response;
}

class FetchError extends Error {
  constructor(message?: string, public code?: number, public info?: any) {
    super(message);
    this.name = "FetchError";
  }
}
