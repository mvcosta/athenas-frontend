import {
  Contracheque,
  ContrachequesResponse,
} from "@/app/models/contracheque.models";
import {
  FolhaEvento,
  FolhasEventosResponse,
} from "@/app/models/folha-evento.models";
import { ServidorResponse } from "@/app/models/servidor.models";

export async function getFolhaEventos(
  contrachequeId: number
): Promise<FolhaEvento[]> {
  const response = await fetch(
    `http://localhost/api/folhas-eventos/?contracheque=${contrachequeId}`,
    {
      headers: {
        Authorization: "Token e8860c988eb2dcfd95d92d516f2c206d8dc3e3bc",
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

export async function getContracheques(
  ano: string = "2024",
  mes: string = "1",
  tipo_folha: string = "1",
  limit: number = 10,
  offset: number = 0
): Promise<{ contracheques: Contracheque[]; count: number }> {
  const query = `?tipo_folha=${tipo_folha}&ano=${ano}&mes=${mes}&limit=${limit}&offset=${offset}`;
  const response = await fetch(`http://localhost/api/contracheques/${query}`, {
    headers: {
      Authorization: "Token e8860c988eb2dcfd95d92d516f2c206d8dc3e3bc",
    },
  });

  if (!response.ok) {
    const txt = await response.text();
    throw new Error(txt);
  }

  const contrachequeResponse: ContrachequesResponse = await response.json();
  const contracheques = await Promise.all(
    contrachequeResponse.results.map(async (c) => {
      const extraAttr = await getServidorExtraAttr(c.servidor.id);
      return {
        id: c.pk,
        matricula: c.servidor.matricula,
        nome: c.servidor.nome,
        efetivo: extraAttr.efetivo,
        confianca: extraAttr.confianca,
        estagio: "",
        ferias: extraAttr.refFerias,
      };
    })
  );

  return {
    contracheques,
    count: contrachequeResponse.count,
  };
}

type ServidorExtraAttr = {
  refFerias: string;
  efetivo: string;
  confianca: string;
  estagio?: string;
};

async function getServidorExtraAttr(
  servidorId: number
): Promise<ServidorExtraAttr> {
  const response = await fetch(
    `http://localhost/api/servidores/${servidorId}/`,
    {
      headers: {
        Authorization: "Token e8860c988eb2dcfd95d92d516f2c206d8dc3e3bc",
      },
    }
  );

  if (!response.ok) {
    const txt = await response.text();
    throw new Error(txt);
  }

  const servidor: ServidorResponse = await response.json();
  const efetivo = findCargoCodigoPorTipoLeiCargo(servidor, "EF");
  const confianca = findCargoCodigoPorTipoLeiCargo(servidor, "CM");

  return {
    refFerias: servidor.data_referencia_ferias ?? "",
    efetivo,
    confianca,
  };
}

function findCargoCodigoPorTipoLeiCargo(
  servidor: ServidorResponse,
  tipoLeiCargo: string
): string {
  return (
    servidor.posses.find((p) => p.tipo_lei_cargo === tipoLeiCargo)
      ?.cargo_codigo ?? ""
  );
}
