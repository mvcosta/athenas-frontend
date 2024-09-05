export async function authFetch(
  input: string | URL | globalThis.Request,
  token: string,
  init?: RequestInit
): Promise<Response> {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await delay(500);

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

export class FetchError extends Error {
  constructor(message?: string, public code?: number, public info?: any) {
    super(message);
    this.name = "FetchError";
  }
}
