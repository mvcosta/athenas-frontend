import { authAPIPaginatedFetch } from "@/lib/fetch-server";
import {
  ConfiguracaoPrevidencia,
  ConfiguracaoPrevidenciaResponse,
} from "../_models/previdencia.models";

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
