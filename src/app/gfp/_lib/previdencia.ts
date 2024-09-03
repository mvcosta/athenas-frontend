import { authAPIPaginatedFetch } from "@/lib/fetch-server";
import {
  ConfiguracaoPrevidencia,
  ConfiguracaoPrevidenciaResponse,
} from "../_models/previdencia.models";
import { EnumFieldResponse } from "@/interfaces/enum-field";

export async function getConfiguracoesPrevidencia(
  page: number = 0,
  limit: number = 10
): Promise<{
  configuracoesPrevidencias: ConfiguracaoPrevidencia[];
  count: number;
}> {
  const response = await authAPIPaginatedFetch(
    "v2/configuracoes-previdencia",
    page,
    limit
  );
  const configuracoesResponse: ConfiguracaoPrevidenciaResponse =
    await response.json();
  return {
    configuracoesPrevidencias: configuracoesResponse.results,
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

async function fetchEnum(endpoint: string) {
  const response = await authAPIPaginatedFetch(endpoint);
  const regimesResponse: EnumFieldResponse = await response.json();
  return regimesResponse.results;
}
