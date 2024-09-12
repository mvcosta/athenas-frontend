import { EnumField } from "@/interfaces/enum-field";
import { PaginatedResponse } from "@/interfaces/paginated-response";
import { PessoaJuridica } from "../../rh/_models/pessoa-juridica.models";
import { Servidor } from "@/app/rh/_models/servidor.models";

export interface ConfiguracaoPrevidenciaResponse
  extends PaginatedResponse<ConfiguracaoPrevidencia> {}

export interface ConfiguracaoPrevidencia {
  id: number;
  regime_previdencia: EnumField;
  regime_previdencia_sicap: EnumField;
  tipo_plano_segregacao: EnumField;
  orgao_previdencia: PessoaJuridica;
  orgao_recolhimento: PessoaJuridica;
}

export interface FiliacaoPrevidenciaResponse
  extends PaginatedResponse<FiliacaoPrevidencia> {}

export interface FiliacaoPrevidencia {
  id: number;
  configuracao_previdencia: ConfiguracaoPrevidencia;
  servidor: Servidor;
  data_inicio_vigencia: string;
  data_fim_vigencia: string;
}
