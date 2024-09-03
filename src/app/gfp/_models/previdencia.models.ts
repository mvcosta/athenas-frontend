import { EnumField } from "@/interfaces/enum-field";
import { PaginatedResponse } from "@/interfaces/paginated-response";

export interface ConfiguracaoPrevidenciaResponse
  extends PaginatedResponse<ConfiguracaoPrevidencia> {}

export interface ConfiguracaoPrevidencia {
  id: number;
  regime_previdencia: EnumField;
  regime_previdencia_sicap: EnumField;
  tipo_plano_segregacao: EnumField;
  orgao_previdencia: OrgaoPrevidencia;
  orgao_recolhimento: OrgaoPrevidencia;
}

interface OrgaoPrevidencia {
  id: number;
  nome: string;
  cnpj: string;
  razao_social: string;
}
