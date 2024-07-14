import { Folha } from "./folha.models";
import { Periodo } from "./periodo.models";

export interface FolhaEvento {
  id: number;
  evento: string;
  descricao: string;
  quantidade: number;
  percentual: number;
  prazo: number;
  valor: number;
  valor_base: number;
  patronal: number;
}

export interface FolhasEventosResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: FolhaEventoResponse[];
}

interface FolhaEventoResponse {
  id: number;
  evento: Evento;
  prazo: number;
  qnt: number;
  pct: number;
  valor: number;
  valor_contracheque: number;
  folha: Folha;
  oculto_contracheque: boolean;
  info: string | null;
  competencia: Periodo;
  adc_remuneracao_periodo_anterior: null;
}

interface Evento {
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
  consignatario: null;
  calculo: Calculo;
}

interface EnumField {
  id: number;
  descricao: string;
}

interface Calculo {
  id: number;
  slug: string;
  path: string;
}
