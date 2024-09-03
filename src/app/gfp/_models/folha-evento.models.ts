import { PaginatedResponse } from "@/interfaces/paginated-response";
import { Evento } from "./eventos.models";
import { Folha } from "./folha.models";
import { Periodo } from "./periodo.models";

export interface FolhasEventosResponse extends PaginatedResponse<FolhaEvento> {}
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
