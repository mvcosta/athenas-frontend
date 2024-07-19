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
  const token = "e8860c988eb2dcfd95d92d516f2c206d8dc3e3bc";
  const config = {
    ...init,
    headers: {
      ...init?.headers,
      Authorization: `Token ${token}`,
    },
  };
  const response = await fetch(input, config);

  if (!response.ok) {
    const txt = await response.text();
    throw new Error(txt);
  }

  return response;
}
