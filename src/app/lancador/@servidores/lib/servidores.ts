export async function getServidores() {
  const contracheques = await getContracheques();

  return contracheques.map((c: any) => ({ ...c.servidor, contracheque: c.pk }));
}

async function getContracheques() {
  const response = await fetch(
    "http://localhost/api/contracheques/?tipo_folha=1&ano=2024&mes=1&limit=10&offset=0",
    {
      headers: {
        Authorization: "Token 32c54ab5ceff4fb43a9df251d61736f0470bec69",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch");
  }

  const jsonResponse = await response.json();
  return jsonResponse.results;
}
