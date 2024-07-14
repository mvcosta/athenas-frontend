import {
  Contracheque,
  ContrachequesResponse,
} from "@/app/models/contracheque.models";
import {
  FolhaEvento,
  FolhasEventosResponse,
} from "@/app/models/folha-evento.models";

export async function getFolhaEventos(
  contrachequeId: number
): Promise<FolhaEvento[]> {
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

  const folhaEventoResponse: FolhasEventosResponse = await response.json();
  return folhaEventoResponse.results.map((fe) => ({
    id: fe.id,
    evento: `${fe.evento.numero}(${fe.evento.rubrica})`,
    descricao: fe.evento.titulo,
    quantidade: fe.qnt,
    percentual: fe.pct,
    prazo: fe.prazo,
    valor: fe.valor,
    valor_base: 0,
    patronal: 0,
  }));
}

export async function getContracheques(): Promise<Contracheque[]> {
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

  const contrachequeResponse: ContrachequesResponse = await response.json();
  return contrachequeResponse.results.map((c) => ({
    id: c.pk,
    matricula: c.servidor.matricula,
    nome: c.servidor.nome,
    efetivo: "",
    confianca: "",
    estagio: "",
    ferias: "",
  }));
}
