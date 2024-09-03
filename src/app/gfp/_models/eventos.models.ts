import { EnumField } from "@/interfaces/enum-field";

export interface EventoResponse {
  count: number;
  next: string;
  previous: string;
  results: Evento[];
}

export interface Evento {
  id: number;
  tipo: string;
  titulo: string;
  numero: string;
  rubrica: string;
  carater: EnumField;
  classe: EnumField;
  lancamento: EnumField;
  tipo_calculo: EnumField;
  config_transparencia: EnumField;
  base_de_calculo: EnumField;
  natureza_indenizacao: EnumField;
  natureza_rubrica: EnumField;
  tipo_rubrica: EnumField;
  incidencia_prev_rgps: EnumField;
  incidencia_irrf: EnumField;
  incidencia_fgts: EnumField;
  incidencia_prev_rpps_regime_militar: EnumField;
  consignatario: Consignatario;
  calculo: Calculo;
}

interface Consignatario {
  id: number;
  nome: string;
  cnpj: string;
  razao_social: string;
}

interface Calculo {
  id: number;
  slug: string;
  path: string;
}
