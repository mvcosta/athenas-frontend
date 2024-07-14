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

export async function getContracheques() {
  const contracheques = await _getContracheques();

  return contracheques.map((c: any) => ({ ...c.servidor, id: c.pk }));
}

async function _getContracheques() {
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
