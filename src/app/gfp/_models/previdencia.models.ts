import { EnumField } from "@/interfaces/enum-field";

export interface ConfiguracaoPrevidenciaResponse {
  count: number;
  next: string;
  previous: string;
  results: ConfiguracaoPrevidencia[];
}
export interface ConfiguracaoPrevidencia {
  id: number;
  regime_previdencia: EnumField;
  regime_previdencia_sicap: EnumField;
  tipo_plano_segregacao: EnumField;
  orgao_previdencia: Orgaoprevidencia;
  orgao_recolhimento: Orgaoprevidencia;
}

interface Orgaoprevidencia {
  id: number;
  nome: string;
  cnpj: string;
  razao_social: string;
}
