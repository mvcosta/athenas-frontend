import { authAPIPaginatedFetch, fetchEnum } from "@/lib/fetch-server";
import {
  ConfiguracaoPrevidencia,
  ConfiguracaoPrevidenciaResponse,
  FiliacaoPrevidencia,
  FiliacaoPrevidenciaResponse,
} from "../_models/previdencia.models";

export async function getConfiguracoesPrevidencia(
  page: number = 0,
  limit: number = 10,
  search?: string
): Promise<{
  data: ConfiguracaoPrevidencia[];
  count: number;
}> {
  const url = search
    ? `v2/configuracoes-previdencia?search=${search}`
    : "v2/configuracoes-previdencia";
  const response = await authAPIPaginatedFetch(url, page, limit);
  const configuracoesResponse: ConfiguracaoPrevidenciaResponse =
    await response.json();
  return {
    data: configuracoesResponse.results,
    count: configuracoesResponse.count,
  };
}

export async function getConfiguracaoPrevidenciaById(
  id: number
): Promise<ConfiguracaoPrevidencia> {
  const response = await authAPIPaginatedFetch(
    `v2/configuracoes-previdencia/${id}`
  );
  const configuracoesResponse: ConfiguracaoPrevidencia = await response.json();
  return configuracoesResponse;
}

export async function getFiliacoesPrevidencia(
  configuracaoPrevidenciaId: string | undefined,
  page: number = 0,
  limit: number = 10,
  search?: string
): Promise<{
  data: FiliacaoPrevidencia[];
  count: number;
}> {
  const url = search
    ? `v2/filiacoes-previdencia/?configuracao_previdencia=${configuracaoPrevidenciaId}&search=${search}`
    : `v2/filiacoes-previdencia/?configuracao_previdencia=${configuracaoPrevidenciaId}`;

  const response = await authAPIPaginatedFetch(url, page, limit);
  const configuracoesResponse: FiliacaoPrevidenciaResponse =
    await response.json();
  return {
    data: configuracoesResponse.results,
    count: configuracoesResponse.count,
  };
}

export async function getRegimesPrevidenciaEnum() {
  return await fetchEnum("v2/regimes-previdencia");
}

export async function getRegimesPrevidenciaSicapEnum() {
  return await fetchEnum("v2/regimes-previdencia-sicap");
}

export async function getPlanosSegregacaoMassa() {
  return await fetchEnum("v2/planos-segregacao-massa");
}
