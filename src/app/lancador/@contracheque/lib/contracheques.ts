export async function getFolhaEventos(contrachequeId: number) {
  const response = await fetch(
    `http://localhost/api/folhas-eventos/?contracheque=${contrachequeId}`,
    {
      headers: {
        Authorization: "Token 32c54ab5ceff4fb43a9df251d61736f0470bec69",
      },
    }
  );

  if (!response.ok) {
    const responseText = await response.text();
    throw new Error(responseText);
  }

  const jsonResponse = await response.json();
  return jsonResponse.results;
}
