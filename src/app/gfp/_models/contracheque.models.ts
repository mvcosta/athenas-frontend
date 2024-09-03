import { PaginatedResponse } from "@/interfaces/paginated-response";
import { Folha } from "./folha.models";

export interface ContrachequesResponse
  extends PaginatedResponse<ContrachequeResponse> {}

export interface Contracheque {
  id: number;
  matricula: number;
  nome: string;
  efetivo: string;
  confianca: string;
  estagio: string;
  ferias: string;
}
interface ContrachequeResponse {
  pk: number;
  servidor: Servidor;
  folha: Folha;
  data_admissao: string;
  base_IR: number;
  dependentes_IR: number;
  dependentes_SF: number;
  total_bruto: number;
  total_liquido: number;
  chave_hash: string;
  lotacao_nome: string;
  nome_cargo_efetivo: string;
  sigla_referencia_salarial_efetivo: string;
  nome_cargo_comissao: string;
  sigla_referencia_salarial_comissao: string;
  margem_consignada_total: number;
  margem_consignada_livre: number;
  margem_cartao_credito: number;
  base_previdenciaria: number;
  dado_bancario_pessoa: null;
  data_exercicio_cargo_efetivo: string;
  data_exercicio_cargo_comissao: string;
  total_bruto_contracheque: number;
  total_rendimentos_transparencia: number;
  total_descontos_transparencia: number;
  total_liquido_transparencia: number;
}

interface Servidor {
  id: number;
  pessoa_fisica: Pessoafisica;
  cpf: string;
  matricula: number;
  nome: string;
  nome_social: string;
  email: string;
  tipo_servidor: Tiposervidor;
  tipo_regime_previdenciario: number;
  tipo: string;
  ativo: boolean;
}

interface Tiposervidor {
  id: number;
  nome: string;
  sigla: string;
}

interface Pessoafisica {
  id: number;
  cpf: string;
  nome: string;
  nome_social: string;
  sexo: string;
  email_institucional: string;
  pis: Pis;
}

interface Pis {
  tipo_documento: Tipodocumento;
  numero: string;
  data_expedicao: null;
  data_validade: null;
  estado_expedicao: null;
  dados_especificos: any[];
}

interface Tipodocumento {
  code: number;
  display_name: string;
}
